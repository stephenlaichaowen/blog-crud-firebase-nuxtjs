# Blog built with Nuxtjs + Firebase

> A blog project built with Nuxtjs, Firebase CRUD operation and authentication/authorization

## Technology
- Frontend: Nuxtjs (Vuex)
- Backend: Firebase
  
## Nuxtjs
Nuxt is a progressive framework based on Vue.js to create modern web applications. It is based on Vue.js official libraries (vue, vue-router and vuex) and powerful development tools (webpack, Babel and PostCSS). Nuxt's goal is to make web development powerful and performant with a great developer experience in mind.

## Firebase
Firebase is a Backend-as-a-Service — BaaS — that started as a YC11 startup and grew up into a next-generation app-development platform on Google Cloud Platform.
It is a collection of  
- Realtime Database
- File Storage
- Authentication
- Hosting

## Nuxt is all about Server Side Rendering
We can prerender server side code with the following methods
- asyncData: it is only work in pages to read/write data from server
- fetch: it does same as asynData but has to works with Vuex
- nuxtServerInit: read/write server data in Vuex

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Deploy to Netlify account

```bash
# Build settings
Build command: npm run generate
Publish directory: dist
```

## Reference
[Nuxt.js - Vue.js on Steroids](https://www.udemy.com/course/nuxtjs-vuejs-on-steroids/)
  
## DEMO
[https://blog-firease-crud-nuxtjs.netlify.app/](https://blog-crud-firebase-nuxtjs.netlify.app/)
