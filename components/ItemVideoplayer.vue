<template>
  <div v-editable="blok" class="item item-Videoplayer">
    <div class="item-Videoplayer_Outer" :class="blok.width">
      <div :id="blok._uid" class="item-Videoplayer_Outer">
        <LazyPlayerYoutube
          v-if="blok.youtube_id != ''"
          :videoid="blok.youtube_id"
          autoplay="1&mute=1"
          title=""
          class="item-Videoplayer_Youtube"
        />
        <LazyPlayerVimeo
          v-if="blok.vimeo_id != ''"
          :videoid="blok.vimeo_id"
          autoplay="1&mute=1"
          title=""
          class="item-Videoplayer_Vimeo"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    console.log("VIDEOPLAYER", this.blok)
  }
}
</script>

<style lang="sass">
.item
  &-Videoplayer
    &_Outer
      position: relative
      padding-bottom: 56.25% //16:9
      height: 0
    video
      width: 100% !important
      height: auto !important
    iframe
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
</style>
