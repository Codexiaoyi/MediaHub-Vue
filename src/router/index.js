import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
import Home from '../views/Home.vue'
import File from '../views/File.vue'
import Album from '../views/Album.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'default',
    redirect: '/home'
},
{
    path: '/home',
    name: 'home',
    component: Home
},
// {
//     path: '/upload',
//     name: 'upload',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//         import( /* webpackChunkName: "about" */ '../views/Upload.vue')
// },
{
    path: '/file',
    name: 'file',
    component: File
},
{
    path: '/album',
    name: 'album',
    component: Album
},
{
    path: '/login',
    name: 'login',
    component: Login
},
{
    path: '/register',
    name: 'register',
    component: Register
}
]

const router = new VueRouter({
    //mode: 'history',
    routes
})

var storeTemp = store;
router.beforeEach((to, from, next) => {
    if (to.path === '/login' || to.path === '/register') {
        next();
    } else {
        let token = window.localStorage.getItem('Token');
        if (token === null || token === '' || token === "undefined") {
        window.alert("大哥，先登录吧！")
            next('/login');
        } else {
            next();
        }
    }
});

export default router