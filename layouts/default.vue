<template>
  <div>
    <the-header />
    <transition name="pages" mode="out-in">
      <nuxt />
    </transition>
  </div>
</template>

<script>
import TheHeader from "~/components/TheHeader.vue"

export default {
  components: {
    "the-header": TheHeader
  }
}
</script>
