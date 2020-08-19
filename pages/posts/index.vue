<template>
  <div class="posts-page">
    <PostList />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'BLOG'
    }
  }
}
</script>

<style scoped>
.post-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>