import Cookie from 'js-cookie'

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

  async addPost({ commit, state }, post) {
    const createdPost = {
      ...post,
      updatedDate: new Date()
    }
    const data = await this.$axios.$post(`https://nuxt-firebase-blog-d15dd.firebaseio.com/posts.json?auth=${state.token}`, createdPost)
    commit('addPost', { ...createdPost, id: data.name })
    this.$router.push('/admin')
  },

  async editPost({ commit, state }, editedPost) {
    await this.$axios.$put(`https://nuxt-firebase-blog-d15dd.firebaseio.com/posts/${editedPost.id}.json?auth=${state.token}`, editedPost)
    commit('editPost', editedPost)
    this.$router.push('/admin')
  },

  async authenticateUser({ commit }, authData) {
    let authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbAPIKey}`

    if (!authData.isLogin) {
      authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbAPIKey}`
    }
    const data = await this.$axios.$post(authUrl, {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    })
    console.log(data)
    commit('setToken', data.idToken)

    // Store token in localStorage
    // '+' before data.expiresIn means converting it to Number, equivalent to Number.parseInt(data.expiresIn)
    localStorage.setItem('token', data.idToken)
    localStorage.setItem('tokenExpiration', new Date().getTime() + +data.expiresIn * 1000)

    // Storage token in Cookie
    Cookie.set('jwt', data.idToken)
    Cookie.set('expirationDate', new Date().getTime() + +data.expiresIn * 1000)

    // dispatch('setLogoutTimer', data.expiresIn * 1000)
    this.$router.push('/admin')
  },

  initAuth({ commit, dispatch }, req) {
    let token, expirationDate
    if (req) {
      if (!req.headers.cookie) return

      const jwtCookie = req.headers.cookie
        .split(';')
        .find(c => c.trim().startsWith('jwt='))
      if (!jwtCookie) return

      token = jwtCookie.split('=')[1]
      expirationDate = req.headers.cookie
        .split(';')
        .find(c => c.trim().startsWith('expirationDate='))
        .split('=')[1]
    } else {
      token = localStorage.getItem('token')
      expirationDate = localStorage.getItem('tokenExpiration')
    }
    if (new Date().getTime() > +expirationDate || !token) {
      console.log(`No token or invalid token`)
      // commit('clearToken')
      dispatch('logout')
      return
    }
    commit('setToken', token)
  },

  logout({ commit }) {
    commit('clearToken')
    Cookie.remove('jwt')
    Cookie.remove('expirationDate')

    if (process.client) {
      localStorage.removeItem('token')
      localStorage.removeItem('tokenExpiration')
      this.$router.push('/admin/auth')
    }
  }

  // setLogoutTimer({ commit }, duration) {
  //   setTimeout(() => {
  //     commit('clearToken')
  //   }, duration)
  // }
}
