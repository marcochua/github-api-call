<template>
  <div class="repos">
    <v-flex>
    <v-card v-for="repo in repos" :key="repo.name">
      <v-card-title primary-title>
        <h2>{{ repo.name }}</h2>
      </v-card-title>
      <v-card-title>
        <h3>{{ repo.full_name }}</h3>
      </v-card-title>
      <v-card-actions>
        <v-btn flat color="orange" @click="getReadme(repo.url)">README</v-btn>
      </v-card-actions>
    </v-card>

    <div class="text-xs-center">
      <v-dialog v-model="dialog" width="800">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          README.md
        </v-card-title>

        <v-card-text>
          <span v-html="readmeval"></span>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-dialog>
    </div>

    <span v-if="!repos">NO PROJECTS FOUND!</span>
    </v-flex>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      dialog: false,
      readmeval: ''
    }
  },
  computed: {
    repos () {
      return this.$store.state.repos
    }
  },
  methods: {
    getRepoFromGithub () {
      axios.defaults.headers.common['Authorization'] = this.$store.state.token
      axios.get('https://api.github.com/users/' + this.$route.params.repo + '/repos').then(({ data }) => {
        this.$store.state.repos = data
      }).catch(({ data }) => {
        this.$store.state.repos = null
      })
    },
    getReadme (repo) {
      axios.defaults.headers.common['Authorization'] = this.$store.state.token
      axios.get(repo + '/readme').then(({ data }) => {
        var base64 = require('base-64')
        var md = require('markdown-it')({
          html: true,
          linkify: true,
          typographer: true
        })
        var mddata = base64.decode(data.content)
        this.readmeval = md.render(mddata)
        this.dialog = true
      }).catch(({ data }) => {
        this.readmeval = 'Readme file not available.'
        this.dialog = true
      })
    }
  },
  beforeMount () {
    this.getRepoFromGithub()
  }
}
</script>
<style>
  div.repo {
    border: 1px #0000 !important;
  }
</style>
