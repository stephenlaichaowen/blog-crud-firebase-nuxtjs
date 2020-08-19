<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>

  </div>
</template>

<script>
export default {
  layout: 'admin',
  head() {
    return {
      title: this.$route.params.postId
    }
  },
  data() {
    return {
      loadedPost: {
        author: 'Stephen Lai',
        title: 'My awesome post',
        content: 'Super amazing, thanks for that...',
        thumbnailLink: 'https://www.paymentsjournal.com/wp-content/uploads/2019/11/904-scaled.jpg'
      }
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