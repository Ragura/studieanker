<template>
  <div>
    <top-header/>
    <main>
      <nuxt/>
    </main>
    <bottom-footer/>
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

