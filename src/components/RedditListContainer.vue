<template>
  <div>{{ posts }}</div>
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
