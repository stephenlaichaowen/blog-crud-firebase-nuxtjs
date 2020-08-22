export const mutations = {
  setPosts: (state, data) => state.posts = data || [],
  addPost: (state, post) => state.posts.push(post),
  editPost: (state, editedPost) => {
    const postIndex = state.posts.findIndex(post => post.id === editedPost.id)
    state.posts[postIndex] = editedPost
  },
  setToken: (state, token) => state.token = token,
  clearToken: state => state.token = null
}