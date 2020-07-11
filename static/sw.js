importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.b6d9668.js",
    "revision": "306fe5b8cb35bfd546423a4c8590e1a6"
  },
  {
    "url": "/_nuxt/commons/app.db2a5a5.js",
    "revision": "68600171a9ef1b722a8ebed51f9b8af9"
  },
  {
    "url": "/_nuxt/pages/_slug.aaad4ce.js",
    "revision": "1c6bfc89957e54ef7cd14037ddab49ef"
  },
  {
    "url": "/_nuxt/pages/about/index.bd8637f.js",
    "revision": "cc03c0eb0e5b4648ef855f631bafdae6"
  },
  {
    "url": "/_nuxt/pages/blog/_slug.3d24ae8.js",
    "revision": "647b13259f96030cccdb0a383a43d6e8"
  },
  {
    "url": "/_nuxt/pages/blog/index.4f4a0e0.js",
    "revision": "30e37df35c382029dd6a7290679c20b6"
  },
  {
    "url": "/_nuxt/pages/index.de62c60.js",
    "revision": "fde2ac4c72e07f7db12858469bba7d00"
  },
  {
    "url": "/_nuxt/pages/temp_index.db80d81.js",
    "revision": "e13c9f704a4307d0b4b6e418a4f66c1a"
  },
  {
    "url": "/_nuxt/pages/TEST_.e9b042f.js",
    "revision": "48a85b9efc77bc15239c0f899f8637d3"
  },
  {
    "url": "/_nuxt/runtime.d8bc79f.js",
    "revision": "d6b11aea76ba9dbfd4732cde7ca4e05a"
  },
  {
    "url": "/_nuxt/vendors~app.e79554e.js",
    "revision": "af45e16cf9ab03fce0c20cff3af7110e"
  },
  {
    "url": "/_nuxt/vendors~pages/about/index.a98530b.js",
    "revision": "30891ed14876e194c48fbd46922f49bf"
  }
], {
  "cacheId": "nuxt-storyblok-boilerplate",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
