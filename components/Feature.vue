<template>
  <div v-editable="blok" class="column feature">
    <p>{{ blok.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
