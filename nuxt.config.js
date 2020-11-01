const axios = require("axios")
require("dotenv").config()

// TODO: Add site title + description
// TODO: Add 1200x630 "image.png" to static
// TODO: Add 512px "icon.png" to static
// TODO: Add Google Analytics variable to buildModules
// TODO: Add rel="noreferrer" to all links (prevents window object access)

// Add the "Lazy" prefix in your templates to enable lazyload components

module.exports = {
  head: {
    title: "Inert Site Title", // Change in package.json files
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, viewport-fit=cover"
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
      },
      { property: "og:image", content: "/image.png" }
    ],
    link: [{ rel: "icon", type: "image/png", href: "/icon.png" }]
  },

  // Loading animation
  loading: false,

  // Auto import components
  components: true,

  // Register CSS files
  css: [
    "@/assets/styles/reset.css",
    // "@/assets/styles/form-reset.css",
    "@/assets/styles/transitions.sass",
    "@/assets/styles/typography.sass",
    "@/assets/styles/body.sass"
  ],

  // Register plugins
  plugins: [
    "~/plugins/components",
    "~/plugins/filters",
    "~/plugins/vue-lazyload"
    // "~/plugins/vue-scrollto"
  ],

  // Register modules
  modules: [
    "@nuxtjs/axios",
    // "vue-scrollto/nuxt",
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

  // Generate routes
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
    },
    // Fallback to prevent Netlify from directing to its own error pages
    fallback: true
  },

  // Modules only run on build
  buildModules: [
    [
      "@nuxtjs/pwa",
      {
        icon: false // disables the icon module due dynamic favicon
      }
    ],
    "@nuxtjs/dotenv",
    "@nuxtjs/style-resources",
    "@aceforth/nuxt-optimized-images"
    // [
    //   "@nuxtjs/google-analytics",
    //   {
    //     id: process.env.GA_ID
    //   }
    // ]
  ],

  // Settings for "@nuxtjs/style-resources"
  styleResources: {
    sass: "./assets/styles/vars/*.sass"
  },

  // Settings for "@aceforth/nuxt-optimized-images"
  optimizedImages: {
    optimizeImages: true
  },

  // Settings for PWA
  pwa: {
    icon: false
  },

  // Run on build
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
      // Fixes dotenv error
      config.node = {
        fs: "empty"
      }
    },
    // Transpile GSAP for server side rendering
    transpile: ["gsap"]
  }
}
