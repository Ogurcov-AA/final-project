import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: function () {
            return import('../views/Home.vue')
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

  ]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


export default router
