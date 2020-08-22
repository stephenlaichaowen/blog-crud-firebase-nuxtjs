<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <AppControlInput type="email" v-model="email">E-Mail Address</AppControlInput>
        <AppControlInput type="password" v-model="password">Password</AppControlInput>
        <AppButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin"
        >Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton>
      </form>
    </div>
  </div>
</template>

<script>
import  { mapGetters, mapActions } from 'vuex'

export default {
  layout: 'admin',
  head() {
    return {
      title: 'AUTHENTICATION'
    }
  },
  data() {
    return {
      isLogin: true,
      email: '',
      password: ''
    }
  },
  mounted() {
    console.log(`login state: ${this.isAuthenticated}`)     
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    ...mapActions(['authenticateUser']),
    onSubmit() {
      this.authenticateUser({
        isLogin: this.isLogin,
        email: this.email,
        password: this.password
      })
      // this.$router.push('/admin')
      // let authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbAPIKey}`

      // if (!this.isLogin) {
      //   authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbAPIKey}`
      // }
      // const data = await this.$axios.$post(authUrl, {
      //   email: this.email,
      //   password: this.password,
      //   returnSecureToken: true
      // })
      // console.log(data)
      // return { data }

    }
  }
}
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>

