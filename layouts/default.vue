<template>
  <div>
    <the-navigation />
    <transition name="pages" mode="out-in">
      <nuxt />
    </transition>
  </div>
</template>

<script>
import TheNavigation from "~/components/TheNavigation.vue"

export default {
  components: {
    "the-navigation": TheNavigation
  }
}
</script>
