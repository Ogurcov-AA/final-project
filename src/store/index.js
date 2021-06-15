import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/currentUser.js'
import news from './modules/News.js'
import comments from '../store/modules/comments.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    news,
    comments
  }
})
