import Vue from "vue"

// Storyblok image optimisation
Vue.filter("transformImage", (image, option) => {
  if (!image) return ""
  if (!option) return ""
  let imageService = "//img2.storyblok.com/"
  let pathOne = image.replace("https://a.storyblok.com", "")
  let pathTwo = pathOne.replace("//a.storyblok.com", "")
  return imageService + option + pathTwo
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

// Remove first of array
Vue.filter("removeFirst", function(values) {
  return values.slice(1)
})

// Remove specific value of array
Vue.filter("removeValue", function(values, removeValue) {
  return values.filter(el => el !== removeValue)
})

// Show X of array
Vue.filter("showOnlyFirstX", function(values, amount) {
  return values.slice(0, amount)
})

// Shuffle array
Vue.filter("shuffle", function(values) {
  for (var i = values.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = values[i]
    values[i] = values[j]
    values[j] = temp
  }
  return values
})

// Remove duplicates
Vue.filter("unique", function(values) {
  return values.filter(function(element, index, self) {
    return index == self.indexOf(element)
  })
})

// Uppercase
Vue.filter("upperCase", function(values) {
  return values.toUpperCase()
})
