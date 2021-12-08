<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        lg="4"
        xl="3"
        class="mb-3 mt-3"
        v-for="(post, i) in posts"
        :key="post.name"
      >
        <RedditListItem :post="post.data" :index="i" />
      </v-col>

      <span ref="loadMorePosts"></span>
      <v-col
        cols="12"
        sm="6"
        lg="4"
        xl="3"
        class="mb-3 mt-3"
        v-for="skeleton in 6"
        :key="skeleton"
      >
        <v-skeleton-loader type="card"> </v-skeleton-loader>
      </v-col>
      <span ref="loadMorePostsEnd"></span>
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
  },
  mounted() {
    this.initIntersectionObserver();
    this.observe();
  },
  computed: mapState(["posts", "isLoadingPosts"]),
  methods: {
    initIntersectionObserver() {
      let options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      };

      this.observer = new IntersectionObserver(this.callback, options);
    },
    callback() {
      if (!this.isLoadingPosts) {
        this.$store.dispatch("loadPosts");
      }
    },
    async observe() {
      this.observer.observe(this.$refs.loadMorePosts);
      this.observer.observe(this.$refs.loadMorePostsEnd);
    },
  },
};
</script>