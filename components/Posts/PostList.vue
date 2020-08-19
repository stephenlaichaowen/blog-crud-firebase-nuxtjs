<template>
  <section class="post-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      title="First Post"
      previewText="This is the first post!"
      thumbnail="https://www.paymentsjournal.com/wp-content/uploads/2019/11/904-scaled.jpg"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      title="Second Post"
      previewText="This is the first post!"
      thumbnail="https://www.netscribes.com/wp-content/uploads/2019/06/Technology-Watch.jpg"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      title="Third Post"
      previewText="This is the first post!"
      thumbnail="https://i.insider.com/5dee64d9fd9db2555e652ae2?width=600&format=jpeg&auto=webp"
    />
  </section>
</template>

<script>
export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>