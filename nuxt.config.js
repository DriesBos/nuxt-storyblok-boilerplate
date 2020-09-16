const axios = require("axios")
require("dotenv").config()

// TODO: Add site title
// TODO: Add .env secrets
// TODO: Add 512px "icon.png" to static
// TODO: Add Google Analytics env
// TODO: Add rel="noreferrer" to all links (prevents window object access)

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "Inert Site Title", // Change in package.json files
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Insert Site Descr" // Change in package.json files
      },
      {
        name: "mobile-web-app-capable",
        content: "yes"
      },
      {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent"
      },
      {
        // Change if needed
        name: "theme-color",
        content: "#ffffff"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: false,

  /*
   ** Scroll behaviour (depreciated but new method seems buggy (app folder))
   */
  router: {
    scrollBehavior: function() {
      return { x: 0, y: 0 }
    }
  },

  /*
   ** Global CSS
   */
  css: [
    "@/assets/styles/reset.css",
    "@/assets/styles/transitions.sass",
    "@/assets/styles/variables.sass",
    "@/assets/styles/typography.sass",
    "@/assets/styles/body.sass"
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/components", "~/plugins/filters"],

  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/axios",
    "vue-scrollto/nuxt",
    [
      "@bazzite/nuxt-optimized-images",
      { optimizedImages: { optimizeImages: true, optimizeImagesInDev: true } } // Test compression by setting to true first
    ],
    [
      "storyblok-nuxt",
      {
        accessToken:
          process.env.NODE_ENV == "production"
            ? process.env.PUBLICKEY
            : process.env.PREVIEWKEY,
        cacheProvider: "memory"
      }
    ]
  ],
  /*
   ** Nuxt Generate
   */
  generate: {
    routes: function(callback) {
      const token = process.env.PUBLICKEY
      const version = "published"
      let cache_version = 0

      let toIgnore = ["home", "en/settings"]

      // other routes that are not in Storyblok with their slug.
      let routes = ["/"] // adds / directly

      // Load space and receive latest cache version key to improve performance
      axios
        .get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`)
        .then(space_res => {
          // timestamp of latest publish
          cache_version = space_res.data.space.version

          // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
          axios
            .get(
              `https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cache_version}&per_page=100`
            )
            .then(res => {
              Object.keys(res.data.links).forEach(key => {
                if (!toIgnore.includes(res.data.links[key].slug)) {
                  routes.push("/" + res.data.links[key].slug)
                }
              })

              callback(null, routes)
            })
        })
    }
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
        })
      }
    },
    // Transpile GSAP for server side rendering
    transpile: ["gsap"]
  },
  buildModules: [
    "@nuxtjs/pwa"
    // [
    //   "@nuxtjs/google-analytics",
    //   {
    //     id: process.env.GA_ID
    //   }
    // ]
  ]
}
