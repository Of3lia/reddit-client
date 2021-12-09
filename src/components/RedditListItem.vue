<template>
  <v-card>
    <v-row>
      <v-col>
        <v-card-title>
          <a
            style="color: inherit; text-decoration: inherit"
            :href="post.url_overridden_by_dest"
          >
            {{ post.title }}
            <v-icon style="color: rgb(50, 50, 250)">mdi-open-in-new</v-icon>
          </a>
        </v-card-title>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-img
          v-if="!post.is_video && post.thumbnail"
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