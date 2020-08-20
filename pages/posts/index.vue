<template>
  <div class="posts-page">
    <PostList :posts="posts" />
  </div>
</template>

<script>
import  { mapGetters } from 'vuex'

export default {
  head() {
    return {
      title: 'BLOG'
    }
  },
  computed: {
    ...mapGetters(['posts'])
  }
  // async asyncData({ $axios }) {
  //   const loadedPosts = await $axios.$get('/posts.json')
  //   return { loadedPosts }
  // }  
}
</script>

<style scoped>
.post-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>