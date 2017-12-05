module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Movement Mortgage: New Hires',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Movement Mortgage New Hires' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oswald' }
    ]
  },
  build: {
    vendor: ['axios', 'tween', 'd3']
  },
  env: {
    baseURL: (process.env.NODE_ENV === 'production' ? 'http//example-url' : 'http://localhost:3000')
  },
  css: [
    'tachyons/css/tachyons.css',
    '~/assets/css/main.css',
    '~/assets/css/main.scss'
  ],
  // plugins: [
  //   { src: '~/plugins/tween', ssr: false }
  // ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#000000' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
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
