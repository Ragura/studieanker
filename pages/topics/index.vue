<template>
  <section>
    <v-jumbotron :src="require('~/assets/images/topics_jumbo4.jpg')" dark>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h3 class="display-4 mb-4">Studieanker</h3>
            <h3 class="display-2" >Kies een topic om te beginnen!</h3>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
     <!-- <v-parallax :src="require('~/assets/images/topics_jumbo3.png')">
      <v-container fill-height>
          <v-layout align-center>
            <v-flex text-xs-center>
              <h3 class="display-4 mb-4">Studieanker</h3>
              <h3 class="display-2" >Kies een topic om te beginnen!</h3>
            </v-flex>
          </v-layout>
        </v-container>
     </v-parallax>  -->
    

      <ul>
        <li v-for="topic in stories" :key="topic.id">
          <nuxt-link :to="topic.full_slug">
            {{ topic.content.title }}
          </nuxt-link>
        </li>
      </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      stories: {},
      gradient: 'to top, #e9f4a0, #cbe31b'
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



