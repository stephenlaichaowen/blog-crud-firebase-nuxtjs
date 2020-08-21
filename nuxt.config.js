
export default {
  mode: 'universal',
  
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans' }
    ]
  },
  
  loading: { color: '#fff' },
  
  css: [
    '~assets/css/main.css'
  ],
  

  transitions: {
    name: 'fade',
    mode: 'out-in'
  },

  components: true,

  plugins: [
    '~plugins/date-filter.js'
  ],
  
  buildModules: [
  ],
  
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: (process.env.NODE_ENV === 'production' ? 'https://blog-crud-firebase-nuxtjs.netlify.app/' : 'http://localhost:3000'), 
  },
  
  build: {
    
    extend (config, ctx) {
    }
  }
}
