import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import user from './modules/currentUser'
import news from './modules/News'
import comments from "@/store/modules/comments";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        user,
        news,
        comments
    }
})
