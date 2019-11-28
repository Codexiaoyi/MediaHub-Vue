import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import File from '../views/File.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/file',
        name: 'file',
        component: File
    },
    {
        path: '/login',
        name: 'login',
        component: Home
    },
    {
        path: '/register',
        name: 'register',
        component: Home
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router