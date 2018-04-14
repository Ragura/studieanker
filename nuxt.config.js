const pkg = require("./package");

module.exports = {
  mode: "universal",

  /*
  ** Headers of the page
  */
  head: {
    title: "Studieanker",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet", href: "//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css"
      },
      { 
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3B8070" },

  /*
  ** Global CSS
  */
  css: ['~assets/app.styl'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/vuetify.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      "storyblok-nuxt",
      { accessToken: "eDDr9UZ1ahhxOHyaAXeLEAtt", cacheProvider: "memory" }
    ]
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

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
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },

    vendor: ['vuetify']
  }
};
