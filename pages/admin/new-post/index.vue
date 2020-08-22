<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  head() {
    return {
      title: 'NEW POST'
    }
  },
  methods: {
    ...mapActions(['addPost']),
    onSubmitted(postData) {
      this.addPost(postData)
    }

    // async onSubmitted(postData) {
    //   const data = await this.$axios.$post('https://nuxt-firebase-blog-d15dd.firebaseio.com/posts.json', { ...postData, updatedDate: new Date() })
    //   this.$router.push('/admin')
    // }
  },
}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>