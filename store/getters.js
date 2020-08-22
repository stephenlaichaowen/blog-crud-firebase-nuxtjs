export const getters = {
  posts: state => state.posts,
  token: state => state.token,
  isAuthenticated: state => state.token != null
}