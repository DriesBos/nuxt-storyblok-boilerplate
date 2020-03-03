importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/012a7d863e0ef08bea78.js",
    "revision": "d9d3ed15f6e52b02932cf7bb08811d7d"
  },
  {
    "url": "/_nuxt/0a2067ee5b1a067bddf6.js",
    "revision": "16b6dd498b806242a57784833214934e"
  },
  {
    "url": "/_nuxt/20933d85263980b42cd6.js",
    "revision": "39a2c5289a17dfb873a80fe72f63a023"
  },
  {
    "url": "/_nuxt/2ca598785106c7557792.js",
    "revision": "7bf1c00b191652994e82232b36c91cca"
  },
  {
    "url": "/_nuxt/2ddd07a856172f4430ee.js",
    "revision": "830a626c640ff7a7b8bdb3eb046d2e3b"
  },
  {
    "url": "/_nuxt/3bb44badf6f61e8e4c16.js",
    "revision": "4ed6101c71a08bed9cc34be7677cfb00"
  },
  {
    "url": "/_nuxt/65850b6a539be0be0eab.js",
    "revision": "ab5d1a518770ecd9604db8233ebefeb4"
  },
  {
    "url": "/_nuxt/70a839fccc6ac8219aba.js",
    "revision": "dea5401a8dcac8bca7c8a869c8c46165"
  },
  {
    "url": "/_nuxt/830e6d7a97b3206cbf32.js",
    "revision": "16c335f697f70212a15f9a596ea44e25"
  },
  {
    "url": "/_nuxt/a09a3cd11f3471457f1a.js",
    "revision": "9e81e331524716c24eeb7495e961cfdc"
  },
  {
    "url": "/_nuxt/ad86c14f2063b627091f.js",
    "revision": "bc8c0857d30bdbef0a9474da066c4d70"
  },
  {
    "url": "/_nuxt/f9a9317b01e8d41bc895.js",
    "revision": "6695b8d98d700554165b5560ae0f1bc7"
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
