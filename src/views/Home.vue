<template>
    <v-card  tile>
      <v-card-text>
        <div>
          <input id="v-search" v-model="keysearch" placeholder="Search user..." />
          <v-btn color="success" @click="searchUser()">Search</v-btn>
        </div>
      </v-card-text>
      <div>
        <UserList msg="test"></UserList>
      </div>
    </v-card>
</template>

<script>
import UserList from '../components/UserList'
import axios from 'axios'

export default {
  data () {
    return {
      keysearch: ''
    }
  },
  components: {
    UserList
  },
  methods: {
    searchUser () {
      if (this.keysearch !== undefined && this.keysearch !== '') {
        axios.defaults.headers.common['Authorization'] = this.$store.state.token
        axios.get('https://api.github.com/search/users?q=' + this.keysearch).then(({ data }) => {
          if (data.total_count > 0) {
            this.$store.state.gitHubUsers = data.items
          } else {
            alert('no users found.')
          }
        })
      } else {
        this.$store.state.gitHubUsers = []
      }
    },
    clearSearch () {
      this.keysearch = ''
      this.$store.state.gitHubUsers = null
      this.$store.state.title = 'Github'
    }
  },
  beforeMount () {
    this.clearSearch()
  }
}

</script>

<style>
  input {
    height: 40px;
  }
</style>
