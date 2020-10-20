<template>
  <!-- prettier-ignore -->
  <iframe
    id="mediaPlayer"
    allow="autoplay"
    type="text/html"
    frameborder="0"
    :src="'https://www.youtube.com/embed/' + videoid + '?autoplay=' + autoplay + '&loop=1'"
    :title="title"
  />
</template>

<script>
export default {
  props: {
    videoid: String,
    autoplay: String,
    title: String
  }
}
</script>
