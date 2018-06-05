import Vue from 'vue'
import Router from 'vue-router'

import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
import '@/assets/styles/styles.less'

Vue.use(Router)
Vue.use(Vant)
const router = new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('@/pages/index')
        },
        {
            path: '/home',
            name: 'home',
            // 需要登录才能进入的页面可以增加一个meta属性
            meta: {
                requireAuth: true
            },
            component: () => import('@/pages/home')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/pages/login')
        },
        {
            path: '/share',
            name: 'share',
            component: () => import('@/pages/share')
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
        if (localStorage.getItem('username')) {// 判断是否登录
            next()
        } else {// 没登录则跳转到登录界面
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }
    } else {
        next()
    }
})

export default router