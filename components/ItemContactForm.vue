<template>
  <section v-editable="blok" class="item item-ContactForm">
    <!-- prettier-ignore -->
    <form
      name="contact"
      method="post"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="text" required name="name" placeholder="name" />
      <input type="text" required name="email" placeholder="email" />
      <input type="text" required name="message" placeholder="message" />
      <div class="subSection-Contact_Send">
        <input type="submit" value="submit" title="submit"/>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>

<style lang="sass">
.item
  &-ContactForm
    form
      display: flex
      flex-direction: column
      input
        padding: 1rem
        font-size: 1rem
        border: 0
        border-bottom: 1px solid $support-color
        background: transparent
        width: 100%
        &::placeholder
          color: $color
</style>
