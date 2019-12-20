import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
import Home from '../views/Home.vue'
import File from '../views/File.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

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
        import( /* webpackChunkName: "about" */ '../views/About.vue')
},
{
    path: '/file',
    name: 'file',
    component: File
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
    if (!storeTemp.state.token) {
        storeTemp.commit("saveToken", window.localStorage.Token);
    }
    if (to.meta.requireAuth) {
        // 判断该路由是否需要登录权限
        if (storeTemp.state.token) {
            // 通过vuex state获取当前的token是否存在
            next();
        } else {
            //这里使用Id4授权认证，用Jwt，请删之，并把下边的跳转login 打开；
            // applicationUserManager.login();

            //这里使用Jwt登录，如果不用Id4授权认证，这里打开它；
            next({
                path: "/login",
                query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
            });
        }
    } else {
        next();
    }
});

export default router