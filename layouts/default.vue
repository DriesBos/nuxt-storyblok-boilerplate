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
import TheNavigation from "~/components/TheNavigation.vue"

export default {
  components: {
    "the-navigation": TheNavigation
  }
}
</script>
