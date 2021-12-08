<template>
  <v-container>
    <v-row class="text-center"> {{ posts }} </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "RedditListContainer",
  created() {
    this.$store.dispatch("loadPosts");
  },
  computed: mapState(["posts"]),
};
</script>

<style scoped lang="scss">
</style>
