<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center">
        <v-icon x-large v-on:click="scrollToTop()">mdi-paw</v-icon>
        &nbsp;reddit/aww client
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
  },
  data: () => ({
    //
  }),
};
</script>
