<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton class="btn-create-post" @click="$router.push('/admin/new-post')">Create Post</AppButton>
      <AppButton @click="onLogout">Logout</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList isAdmin :posts="posts" />
    </section>
  </div>
</template>

<script>
import  { mapGetters, mapActions } from 'vuex'

export default {
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  head() {
    return {
      title: 'ADMIN'
    }
  },
  // async asyncData({ $axios }) {
  //   const loadedPosts = await $axios.$get('/posts.json')
  //   return { loadedPosts }
  // }  
  computed: {
    ...mapGetters(['posts'])
  },
  methods: {
    ...mapActions(['logout']),
    onLogout() {
      this.logout()
    }
  },
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.btn-create-post {
  margin-right: 1rem;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}

</style>