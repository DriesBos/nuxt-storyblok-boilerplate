<template>
  <div v-editable="blok" class="teaser">
    <p>{{ blok.headline }}</p>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
