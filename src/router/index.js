import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Foo from '../views/foo.vue';
import Bar from '../views/bar.vue';

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
]
const router = new VueRouter({
    routes
})
export default router;