<template>
  <v-container>
    <v-row>
      <v-col class="col-4 mb-3 mt-3" v-for="post in posts" :key="post.name">
        <RedditListItem :post="post.data" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import RedditListItem from "./RedditListItem.vue";

export default {
  name: "RedditListContainer",
  components: { RedditListItem },
  data() {
    return {
      observer: {},
    };
  },
  created() {
    this.$store.dispatch("loadPosts");
    this.initIntersectionObserver();
  },
  computed: mapState(["posts"]),
  methods: {
    initIntersectionObserver() {
      let options = {
        root: document.querySelector("#scrollArea"),
        rootMargin: "0px",
        threshold: 1.0,
      };

      this.observer = new IntersectionObserver(this.callback, options);
    },
    callback() {},
  },
};
</script>