<template>
  <div class="single-post-page">
    <section class="post">
      <!-- <h1 class="post-title">{{ post.title }} ID: {{ post.id }}</h1> -->
      <h1 class="post-title">{{ post.title }}</h1>
      <div class="post-details">
        <div class="post-detail">Last updated on {{ post.updatedDate |  date }}</div>
        <div class="post-detail">Written by {{ post.author }}</div>
      </div>
      <p class="post-content">{{ post.content }}</p>
    </section>
    <section class="post-feedback">
      <p>Let me know what you think about the post, send a mail to <a href="mailto:slai@gamil.com">feedback@slai.gamil.com</a></p>
    </section>
    <nuxt-link to="/posts">Back to Posts</nuxt-link>
  </div>
</template>

<script>
export default {
  head() {
    return {
      // title: `id:${this.$route.params.id}`
      title: `${this.post.title}`
    }
  },

  // async asyncData({ $axios, params }) {
  //   const post = await $axios.$get(`/${params.id}.json`)
  //   return { post }
  // }

  async asyncData({ $axios, params }) {
    const post = await $axios.$get(`https://nuxt-firebase-blog-d15dd.firebaseio.com/posts/${params.id}.json`)
    return { post }
  }
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>