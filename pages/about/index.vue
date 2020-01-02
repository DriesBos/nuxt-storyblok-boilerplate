<template>
  <section>
    <p>ABOUT</p>
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
