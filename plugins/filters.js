import Vue from "vue"
import VueLazyload from "vue-lazyload"

Vue.filter("transformImage", (image, option) => {
  if (!image) return ""
  if (!option) return ""
  let imageService = "//img2.storyblok.com/"
  let pathOne = image.replace("https://a.storyblok.com", "")
  let pathTwo = pathOne.replace("//a.storyblok.com", "")
  return imageService + option + pathTwo
})

Vue.use(VueLazyload, {
  preLoad: 2
})

Vue.filter("dashify", function(value) {
  if (typeof value === "undefined") {
    return "undefined"
  }
  let dashified = value
    .toString()
    .replace(/([A-Z])/g, " $1")
    .trim()
    .toLowerCase()
    .replace(/[ _]/g, "-")

  return "blok-" + dashified
})
