<template>
  <div class="users">
    <div class="user" v-for="gitHubUser in gitHubUsers" :key="gitHubUser.login">
      <router-link :to="{ name: 'repo', params: { repo: gitHubUser.login }}">
        <h3><img :src="gitHubUser.avatar_url" alt="" height="20px" width="20px;" />{{ gitHubUser.login }} </h3>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    gitHubUsers () {
      return this.$store.state.gitHubUsers
    }
  }
}
</script>
