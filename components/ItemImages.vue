<template>
  <div v-editable="blok" class="item item-Images">
    <ul class="item-Images_list" :data="blok.images.length">
      <li v-for="(image, i) in blok.images" :key="i" class="item-Images_Single">
        <div
          class="aspectRatioOutside"
          :class="[blok.ratio, blok.size, blok.fill]"
        >
          <div class="aspectRatioInside">
            <!-- <img v-lazy="image.filename" class="lazy" :alt="image.name" /> -->
            <img
              v-lazy="`${transformImage(image.filename, '1440x0')}`"
              :data-srcset="
                `${transformImage(image.filename, '400x0')} 400w, 
                 ${transformImage(image.filename, '800x0')} 800w, 
                 ${transformImage(image.filename, '1200x0')} 1200w,
                 ${transformImage(image.filename, '1600x0')} 1600w,
                 ${transformImage(image.filename, '2000x0')} 2000w`
              "
              class="lazy"
              :alt="image.name"
            />
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
    // console.log(this.blok)
  },
  methods: {
    transformImage(image, option) {
      if (!image) return ""
      if (!option) return ""
      let imageService = "//img2.storyblok.com/"
      let pathOne = image.replace("https://a.storyblok.com", "")
      let pathTwo = pathOne.replace("//a.storyblok.com", "")
      return imageService + option + pathTwo
    }
  }
}
</script>

<style lang="sass">
.item
  &-Images
    &_Single
      // border: 1px solid $color-support
</style>
