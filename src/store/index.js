import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
      console.log(posts);
    }
  },
  actions: {
    loadPosts({ commit }) {
      axios
        .get('https://www.reddit.com/r/aww/.json?after=t3_raw188&limit=1')
        .then(r => r.data)
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
