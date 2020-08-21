<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="post" @submit="onSubmitted" />
    </section>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'admin',
  head() {
    return {
      title: `id:${this.$route.params.postId}`
    }
  },
    
  async asyncData({ $axios, params }) {
    const data = await $axios.$get(`https://nuxt-firebase-blog-d15dd.firebaseio.com/posts/${params.postId}.json`)
    return { post: { ...data, id: params.postId} }
  },

  methods: {
    ...mapActions(['editPost']),
    onSubmitted(editedPost) {
      this.editPost(editedPost)
    }
  },
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>