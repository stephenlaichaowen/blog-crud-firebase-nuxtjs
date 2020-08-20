export const actions = {
  nuxtServerInit({ commit }, context) {
    return context.app.$axios.$get('/posts.json')
    .then(data => commit('setPosts', data))
  }
}
