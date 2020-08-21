export const actions = {
  // nuxtServerInit({ commit }, context) {
  //   return context.app.$axios.$get('/posts.json')
  //   .then(data => commit('setPosts', data))
  // }
  
  nuxtServerInit({ commit }, context) {
    return context.app.$axios.$get('https://nuxt-firebase-blog-d15dd.firebaseio.com/posts.json')
    .then(data => { 
      const postArray = []
      for (const key in data) {
        postArray.push({ ...data[key], id: key })
      }
      commit('setPosts', postArray)
    })
  },
  async addPost({ commit }, post) {
    const createdPost = {
      ...post,
      updatedDate: new Date()
    }
    const data = await this.$axios.$post('https://nuxt-firebase-blog-d15dd.firebaseio.com/posts.json', createdPost)
    commit('addPost', { ...createdPost, id: data.name })
    this.$router.push('/admin')
  },
  async editPost({ commit }, editedPost) {
    await this.$axios.$put(`https://nuxt-firebase-blog-d15dd.firebaseio.com/posts/${editedPost.id}.json`, editedPost)
    commit('editPost', editedPost)    
    this.$router.push('/admin')
  }
}
