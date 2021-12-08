<template>
  <v-card>
    <v-row>
      <v-col>
        <v-card-title>{{ post.title }}</v-card-title>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-img
          v-if="!post.is_video"
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="post.thumbnail"
          transition="scale-transition"
        />
        <video v-else width="100%" controls>
          <source :src="post.secure_media.reddit_video.fallback_url" />
          Your browser does not support the video tag.
        </video>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "RedditListItem",
  props: {
    post: Object,
  },
};
</script>