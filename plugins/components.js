import Vue from "vue"

// PAGES
import Page from "~/components/Page.vue"
import PagePost from "~/components/PagePost.vue"

// ITEMS
import ItemImages from "~/components/ItemImages.vue"
import ItemText from "~/components/ItemText.vue"

// PAGES
Vue.component("blok-page", Page)
Vue.component("blok-page-post", PagePost)

// ITEMS
Vue.component("blok-item-images", ItemImages)
Vue.component("blok-item-text", ItemText)
