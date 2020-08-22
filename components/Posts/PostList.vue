<template>
  <section class="post-list">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :is-admin="isAdmin"
      :title="post.title"
      :previewText="post.previewText"
      :thumbnail="post.thumbnailLink"
    />

    <!-- <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :is-admin="isAdmin"
      :title="post.title"      
      :thumbnail="post.thumbnailLink"
    /> -->
  </section>
</template>

<script>
export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.post-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 20px;  
  box-sizing: border-box;
  margin-bottom: 2rem;
}
</style>