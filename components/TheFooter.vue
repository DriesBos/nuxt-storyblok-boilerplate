<template>
  <footer>
    <div class="row">
      <ul>
        <nuxt-link to="/" tag="li">Home</nuxt-link>
        <nuxt-link to="/blog" tag="li">Blog</nuxt-link>
        <nuxt-link to="/about" tag="li">About</nuxt-link>
      </ul>
      <ul>
        <nuxt-link to="/privacy-policy" tag="li">Privacy Policy</nuxt-link>
        <nuxt-link to="/terms-and-conditions" tag="li"
          >Terms & Conditions</nuxt-link
        >
      </ul>
      <ul>
        <li>
          <a href="" target="_blank" rel="noreferrer">mail</a>
        </li>
        <li>
          <a href="" target="_blank" rel="noreferrer">phone</a>
        </li>
        <li>
          <a href="" target="_blank" rel="noreferrer">instagram</a>
        </li>
        <li>
          <a
            href="https://www.driesbos.com"
            target="_blank"
            title="Site by Dries Bos"
            rel="noreferrer"
          >
            Site by: Dries Bos
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="sass">
footer
  display: flex
  flex-direction: column
  .row
    display: flex
    flex-wrap: nowrap
    ul
       padding: 1rem
</style>
