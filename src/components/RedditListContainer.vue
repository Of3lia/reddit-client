<template>
  <v-container ref="scrollArea">
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
        <span v-if="i == 25">{asdasdasdasdasd}</span>
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
  },
  mounted() {
    this.initIntersectionObserver();
  },
  computed: mapState(["posts"]),
  methods: {
    initIntersectionObserver() {
      let options = {
        root: this.$refs.scrollArea,
        rootMargin: "0px",
        threshold: 1.0,
      };

      this.observer = new IntersectionObserver(this.callback, options);
      console.log(this.$refs.scrollArea);
    },
    callback() {
      console.log("asdasd");
    },
  },
};
</script>