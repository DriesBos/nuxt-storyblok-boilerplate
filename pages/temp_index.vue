<template>
  <section>
    <!-- prettier-ignore -->
    <picture>
      <source :srcset="require('~/assets/images/landscape-1.jpg?webp')" type="image/webp" />
      <source :srcset="require('~/assets/images/landscape-1.jpg')" type="image/jpeg" />
      <img :src="require('~/assets/images/landscape-1.jpg')" />
    </picture>
  </section>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"

export default {
  mixins: [storyblokLivePreview]
}
</script>

<style></style>
