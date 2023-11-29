import { NuxtConfig } from '@nuxt/types/config'

const NuxtAppConfig: NuxtConfig = {
  target: 'static',

  head: {
    title: 'Krates',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A free HTTP based JSON storage service ',
      },
      { hid: 'og:title', name: 'og:title', content: 'Krates' },
      {
        hid: 'og:image',
        name: 'og:image',
        content: '/preview.png',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },

      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900',
      },
    ],
  },

  css: [
    './assets/global.css',
    'codemirror/lib/codemirror.css',
    '@geist-ui/vue/dist/geist-ui.css',
  ],

  plugins: [{ src: '~plugins/codemirror', ssr: false }, '~plugins/theme'],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],

  modules: [['nuxt-vuex-localstorage', { localStorage: ['krates'] }]],

  axios: {},
  server: {
    port: '3000',
    host: '0.0.0.0',
  },

  // generate: {
  //   dir: './dist/dashboard',
  //   fallback: true,
  // },

  build: { transpile: ['@geist-ui/vue', 'axios'], },
}

export default NuxtAppConfig
