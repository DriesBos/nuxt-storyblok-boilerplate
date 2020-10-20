<template>
  <div class="item item-Images">
    <ul class="item-Images_list" :data="blok.images.length">
      <li v-for="(image, i) in blok.images" :key="i" class="item-Images_Single">
        <div
          class="aspectRatioOutside"
          :class="[blok.ratio, blok.size, blok.fill]"
        >
          <div class="aspectRatioInside">
            <img :src="image.filename" :alt="image.name" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    console.log(this.blok)
  }
}
</script>

<style lang="sass">
.item
  &-Images
    &_Single
      // border: 1px solid $support-color
</style>
