<template>
  <section>
    <p>ABOUT</p>
  </section>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"

export default {
  mixins: [storyblokLivePreview],
  mounted() {
    this.testingEnvKeys()
  },
  methods: {
    testingEnvKeys() {
      console.log(process.env.TEST)
    }
  }
}
</script>

<style></style>
