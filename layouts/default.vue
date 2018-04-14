<template>
  <div>
    <v-app>
      <top-header/>
      <v-content>
        <main>
          <nuxt/>
        </main>
      </v-content>
      <!-- <bottom-footer/> -->
    </v-app>
  </div>
</template>

<script>
import TopHeader from '~/components/TopHeader.vue';
import BottomFooter from '~/components/BottomFooter.vue';

export default {
  components: {
    TopHeader,
    BottomFooter
  }  
}
</script>

