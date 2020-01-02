<template>
  <section>
    <!-- prettier-ignore -->
    <picture>
      <source :srcset="require('~/assets/images/landscape-1.jpg?webp')" type="image/webp" />
      <source :srcset="require('~/assets/images/landscape-1.jpg')" type="image/jpeg" />
      <img :src="require('~/assets/images/landscape-1.jpg')" />
    </picture>
  </section>
</template>

<script>
export default {
  mounted() {
    this.testingEnvKeys()
  },
  methods: {
    testingEnvKeys() {
      console.log(process.env.TEST)
    }
  }
}
</script>

<style></style>
