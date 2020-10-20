<template>
  <div v-editable="blok" class="item item-Text">
    <LazyMarkdown :input="blok.text" />
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
