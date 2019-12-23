<template>
  <section>
    <picture>
      <source :srcset="require('~/assets/images/landscape-1.jpg?webp')" type="image/webp" />
      <source :srcset="require('~/assets/images/landscape-1.jpg')" type="image/jpeg" />
      <img :src="require('~/assets/images/landscape-1.jpg')" />
    </picture>
  </section>
</template>

<script>
export default {
  methods: {
    testingEnvKeys() {
      console.log(process.env.TEST)
    }
  },
  mounted() {
    this.testingEnvKeys()
  }
}
</script>

<style></style>
