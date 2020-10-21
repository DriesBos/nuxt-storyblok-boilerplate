<template>
  <div class="markdown" v-html="compiledMarkdown"></div>
</template>

<script>
// https://marked.js.org/
const marked = require("marked")
const renderer = new marked.Renderer()

marked.setOptions({
  renderer: new marked.Renderer(),
  breaks: true
})

renderer.link = function(href, title, text) {
  return (
    '<a target="_blank" href="' +
    href +
    '" title="' +
    title +
    '">' +
    text +
    "</a>"
  )
}

export default {
  name: "MarkdownItem",
  props: {
    input: String
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input, { renderer: renderer })
    }
  }
}
</script>

<style lang="sass">
.markdown p
  white-space: pre-line
// Prefer style handling by cascading css (typography.sass) as much as possible.
</style>
