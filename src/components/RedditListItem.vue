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
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="post.thumbnail"
          transition="scale-transition"
        />
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