import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'

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
        path: '/login/signin',
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
        path: '/login/signup',
        name: 'signup',
        component: function () {
            return import('../views/SingUp.vue')
        }
    },
    {
        path: '/error/404',
        name: 'PageNotFound',
        component: function () {
            return import('../views/NotFoundPage.vue')
        }
    },
    {
        path: '/admin/createNews',
        name: 'new news',
        beforeEnter: (to, from, next) => {
            console.log(to.path === "/admin/createnews" && !store.getters.isAdmin)
            if (to.path === "/admin/createnews" && !store.getters.isAdmin) next('/error/404')
            else next()
        },
        component: function () {
            return import('../views/addNews.vue')
        },

    },
    { path: '/', redirect: '/1' },

  ]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
