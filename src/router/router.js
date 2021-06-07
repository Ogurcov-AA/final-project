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
        name: 'Home',
        component: function () {
            return import('../views/SignIn.vue')
        }
    },
  ]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


export default router
