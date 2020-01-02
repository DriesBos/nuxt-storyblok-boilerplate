<template>
  <div>
    <the-header />
    <nuxt />
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
