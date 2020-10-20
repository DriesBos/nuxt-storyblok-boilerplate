<template>
  <div v-editable="blok" class="item item-Videoplayer">
    <div class="item-Videoplayer_Outer" :class="blok.width">
      <div :id="blok._uid" class="item-Videoplayer_Outer">
        <player-youtube
          v-if="blok.youtube_id != ''"
          :videoid="blok.youtube_id"
          autoplay="1&mute=1"
          title=""
          class="item-Videoplayer_Youtube"
        />
        <player-vimeo
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
    iframe
      width: 100%
</style>
