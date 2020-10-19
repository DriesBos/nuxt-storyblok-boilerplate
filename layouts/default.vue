<template>
  <!-- Change if needed -->
  <main lang="en-US" translate="no">
    <the-navigation />
    <transition name="pages" mode="out-in">
      <nuxt />
    </transition>
  </main>
</template>

<script>
import ogImage from "@/static/og-image.png"

export default {
  head() {
    return {
      meta: [
        {
          hid: "og:image",
          property: "og:image",
          content: this.BASE_URL + ogImage
        }
      ]
    }
  }
}
</script>
