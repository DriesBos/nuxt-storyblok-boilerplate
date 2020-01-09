<template>
  <div class="content">
    <section class="content-work">
      <p>Project Index</p>
      <ul>
        <li v-for="post in stories" :id="post.content.id" :key="post.content.id">
          <nuxt-link :to="post.full_slug" tag="div">
            <h2>{{ post.content.title }}</h2>
            <p>/{{ post.content.year }}</p>
          </nuxt-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"

export default {
  mixins: [storyblokLivePreview],
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/", {
        version: "draft",
        // TODO: Change to path used in CMS
        starts_with: "projects"
      })
      .then(res => {
        return res.data
      })
      .catch(res => {
        if (!res.response) {
          console.error(res)
          context.error({
            statusCode: 404,
            message: "Failed to receive content form api"
          })
        } else {
          console.error(res.response.data)
          context.error({
            statusCode: res.response.status,
            message: res.response.data
          })
        }
      })
  },
  data() {
    return {
      stories: { content: {} }
    }
  },
  mounted() {
    console.log(this.stories)
  }
}
</script>
