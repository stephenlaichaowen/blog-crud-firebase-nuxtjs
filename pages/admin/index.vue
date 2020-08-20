<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')">Create Post</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList isAdmin :posts="posts" />
    </section>
  </div>
</template>

<script>
import  { mapGetters } from 'vuex'

export default {
  layout: 'admin',
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
  }
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
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