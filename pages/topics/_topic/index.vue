<template>
  <section>
    <div>
      <h2 class="subtitle">
        {{ topicInfo.content.title }}
      </h2>
      <p>{{ topicInfo.content.description_long }}</p>
      <h3>Hoofdstukken:</h3>
      <ul>
        <li v-for="chapter in chapters" :key="chapter.id">
          <nuxt-link :to="chapter.slug">
            {{ chapter.content.title }}
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

  computed: {
    chapters: function() {
      return Object.keys(this.stories)
        .map(key => this.stories[key])
        .filter(story => !story.is_startpage);
    },
    topicInfo: function() {
      return Object.keys(this.stories)
        .map(key => this.stories[key])
        .find(story => story.is_startpage);
    }
  },

  asyncData(context) {
    let version = context.query._storyblok || context.isDev ? "draft" : "published";
    const endpoint = `topics/${context.params.topic}/`;

    return context.app.$storyapi
      .get("cdn/stories", {
        version,
        starts_with: endpoint,
        excluding_fields: "content"
      })
      .then(res => {
        console.log("story content:", res.data);
        return res.data;
      })
      .catch(res => {
        context.error(res);
      });
  }
};
</script>



