<template>
  <div v-editable="blok" class="grid">
    <component
      :is="blok.component | dashify"
      v-for="blok in blok.columns"
      :key="blok._uid"
      :blok="blok"
    ></component>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
