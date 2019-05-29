export default {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Kazumi Inada / Hirasuna Art Movement',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '廃宿舎を利用したアート展示。 5/20〜6/2開催。' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'ここにおいて みせる/みる / Kazumi Inada' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'og:image', property: 'og:image', content: '/thumbnail.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~assets/style/global.sass'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/webfont.js', ssr: false },
    { src: '~/plugins/vue-scrollto.js' }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    [ '@nuxtjs/google-analytics', {
      id: 'UA-73443235-7',
      linkers: [ 'live.ham.nandenjin.com' ]
    } ]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
