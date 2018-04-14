<template>
  <section>
    <div>
      <h2 class="subtitle">
        Cursussen over webdevelopment
      </h2>
      <ul>
        <li v-for="topic in stories" :key="topic.id">
          <nuxt-link :to="topic.full_slug">
            {{ topic.content.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      stories: {}
    };
  },

  computed: {},

  asyncData(context) {
    let version = context.query._storyblok || context.isDev ? "draft" : "published";

    return context.app.$storyapi
      .get("cdn/stories", {
        version,
        starts_with: "topics/",
        is_startpage: true
      })
      .then(res => {
        return res.data;
      })
      .catch(res => {
        context.error(res);
      });
  }
};
</script>



