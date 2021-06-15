import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
import Home from '../views/Home.vue'
import SingUp from "../views/SingUp.vue";
import SearchNews from "../views/SearchNews.vue";
import SignIn from "../views/SignIn.vue";
import AboutNews from "../views/AboutNews.vue";
import NotFoundPage from '../views/NotFoundPage.vue'
import addNews from "../views/addNews.vue";
Vue.use(VueRouter)

const routes = [
    {
        path: '/:page',
        name: 'Home',
        component: Home
    },
    {
        path: '/search/:tittle',
        name: 'Search',
        component: SearchNews
    },
    {
        path: '/login/signin',
        name: 'signin',
        beforeEnter: (to, from, next) => {
            console.log(to.path,store.getters.isAuth)
            if (to.path === "/login/signin" && store.getters.isAuth) next('/')
            else next()
        },
        component: SignIn
    },
    {
        path: '/news/:id',
        name: 'news',
        component: AboutNews
    },
    {
        path: '/login/signup',
        name: 'signup',
        beforeEnter: (to, from, next) => {
            console.log(to.path,store.getters.isAuth)
            if (to.path === "/login/signup" && store.getters.isAuth) next('/')
            else next()
        },
        component: SingUp
    },
    {
        path: '/error/404',
        name: 'PageNotFound',
        component: NotFoundPage
    },
    {
        path: '/admin/createNews',
        name: 'new news',
        beforeEnter: (to, from, next) => {
            console.log(to.path === "/admin/createnews" && !store.getters.isAdmin)
            if (to.path === "/admin/createnews" && !store.getters.isAdmin) next('/error/404')
            else next()
        },
        component: addNews

    },
    { path: '/', redirect: '/1' },

  ]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
