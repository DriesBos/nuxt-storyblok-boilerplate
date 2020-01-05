<template>
  <header>
    <nav>
      <ul>
        <nuxt-link to="/" tag="li">Home</nuxt-link>
        <nuxt-link to="/about" tag="li">About</nuxt-link>
        <nuxt-link to="/test" tag="li">Test</nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>
