import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/:page',
        name: 'Home',
        component: function () {
            return import('../views/Home.vue')
        }
    },
    {
        path: '/search/:tittle',
        name: 'Search',
        component: function () {
            return import('../views/SearchNews.vue')
        }
    },
    {
        path: '/login',
        name: 'signin',
        component: function () {
            return import('../views/SignIn.vue')
        }
    },
    {
        path: '/news/:id',
        name: 'news',
        component: function () {
            return import('../views/AboutNews.vue')
        }
    },
    {
        path: '/signup',
        name: 'signup',
        component: function () {
            return import('../views/SingUp.vue')
        }
    },
    {
        path: '/createNews',
        name: 'new news',
        component: function () {
            return import('../views/addNews.vue')
        }
    },
    { path: '/', redirect: '/1' }
  ]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


export default router
