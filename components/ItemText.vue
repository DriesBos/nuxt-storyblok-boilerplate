<template>
  <div v-editable="blok" class="item item-Text">
    <markdown :input="blok.text" />
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
