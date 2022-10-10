import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Foo from '../views/foo.vue';
import Bar from '../views/bar.vue';
import NotFound from '../views/404.vue'
const routes = [
    //路由重定向
    { path: '/', redirect: '/bar' },
    { path: '/foo', component: Foo, },
    { path: '/bar/:id', component: Bar },
    { path: '*', component: NotFound }
]
const router = new VueRouter({
    routes,
    // mode: 'history'//去掉hash#(需要服务器端支持)
})
export default router;