<template>
  <section>
      <h2>{{ story.content.title }}</h2>

      <p v-html="markdown"></p>
  </section>
</template>

<script>
import markdownIt from 'markdown-it';
import hljs from 'highlight.js';

const md = new markdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    console.log(lang);
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
               hljs.highlight(lang, str, true).value +
               '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
});

export default {
  data() {
    return {
      story: {}
    };
  },

  computed: {
    markdown: function() {
      return md.render(this.story.content.content);
    }
  },

  asyncData(context) {
    let version = context.query._storyblok || context.isDev ? "draft" : "published";
    const endpoint = `topics/${context.params.topic}/${context.params.chapter}`;

    return context.app.$storyapi
      .get(`cdn/stories/${endpoint}`, {
        version
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


