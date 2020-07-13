const axios = require("axios")
require("dotenv").config()

module.exports = {
  mode: "universal",

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
    // "@nuxtjs/pwa",
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
  generate: {
    routes: function(callback) {
      const token = process.env.PREVIEWKEY
      const per_page = 1000
      const version = "draft"
      let cache_version = 0

      let page = 1

      // other routes that are not in Storyblok with their slug.
      let routes = ["/"] // adds home directly but with / instead of /home

      // Load space and receive latest cache version key to improve performance
      axios
        .get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`)
        .then(space_res => {
          // timestamp of latest publish
          cache_version = space_res.data.space.version

          // Call first Page of the Stories
          axios
            .get(
              `https://api.storyblok.com/v1/cdn/stories?token=${token}&version=${version}&per_page=${per_page}&page=${page}&cv=${cache_version}`
            )
            .then(res => {
              res.data.stories.forEach(story => {
                if (story.full_slug != "home") {
                  routes.push("/" + story.full_slug)
                }
              })

              // Check if there are more pages available otherwise execute callback with current routes.
              const total = res.headers.total
              const maxPage = Math.ceil(total / per_page)
              if (maxPage <= 1) {
                callback(null, routes)
                return
              }

              // Since we know the total we now can pregenerate all requests we need to get all stories
              let contentRequests = []
              for (let page = 2; page <= maxPage; page++) {
                contentRequests.push(
                  axios.get(
                    `https://api.storyblok.com/v1/cdn/stories?token=${token}&version=${version}&per_page=${per_page}&page=${page}`
                  )
                )
              }

              // Axios allows us to exectue all requests using axios.spread we will than generate our routes and execute the callback
              axios
                .all(contentRequests)
                .then(
                  axios.spread((...responses) => {
                    responses.forEach(response => {
                      response.data.stories.forEach(story => {
                        if (story.full_slug != "home") {
                          routes.push("/" + story.full_slug)
                        }
                      })
                    })

                    callback(null, routes)
                  })
                )
                .catch(callback)
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
    [
      "@nuxtjs/google-analytics",
      {
        id: process.env.GA_ID
      }
    ]
  ]
}
