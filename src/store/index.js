import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    limit: 25,
    after: '',
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = { ...posts, ...state.posts };
      state.after = posts[posts?.length - 1]?.data?.name;
      // console.log(posts[posts.length - 1].data.name);
    }
  },
  actions: {
    loadPosts({ commit }) {
      axios
        .get(`https://www.reddit.com/r/aww/.json?
        after=${this.state.after}&limit=${this.state.limit}`)
        // .get('https://www.reddit.com/r/aww/.json?limit=25')
        .then(r => r.data.data.children)
        .then(posts => {
          commit('SET_POSTS', posts)
        }).catch(e => {
          console.log(e);
          alert('Ups! There was an error, try again later');
        });
    }
  },
  modules: {
  }
})
