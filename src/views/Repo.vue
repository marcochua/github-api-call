<template>
  <div class="repolist">
    <RepoList></RepoList>
  </div>
</template>

<script>
import RepoList from '../components/RepoList'

export default {
  data () {
    return {
      repo: this.$route.params.repo
    }
  },
  components: {
    RepoList
  },
  methods: {
    loadTitle () {
      this.$store.state.title = this.$route.params.repo
    }
  },
  beforeMount () {
    this.loadTitle()
  }
}
</script>
