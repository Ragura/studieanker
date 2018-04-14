<template>
  <v-toolbar color="indigo" dark app>
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <v-toolbar-title dark>
      <nuxt-link to="/">Studieanker</nuxt-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- <v-btn nuxt to="/" icon>
      <v-icon>refresh</v-icon>
    </v-btn> -->
  </v-toolbar>
</template>

<style lang="scss" scoped>
  .toolbar__title {
    a, a:active, a:hover, a:visited {
      text-decoration: none;
      color: white;
    }
  }
</style>

