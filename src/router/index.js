import Vue from 'vue'
import Router from 'vue-router'

const DashboardLayout = () => import(/*webpackChunkName:"dashboard"*/'../components/dashboardLayout.vue')
const LoginLayout = () => import(/*webpackChunkName:"dashboard"*/'../components/loginLayout.vue')

function loadView(view){
    return()=>import(/*webpackChunkName:"view-[request]"*/`../components/dashboardContents/${view}.vue`)
}

const routes = [
    {
        path:'/dashboard',
        component: DashboardLayout,
        children: [
            {
                name: 'Home',
                path: '/home',
                component: loadView('landingPage')
            },
            {
                name: 'UserController',
                path: '/user',
                component: loadView('userController')
            },
            {
                name: 'LayananKendaraan',
                path: '/services',
                component: loadView('servicesController')
            }
        ]
    },
    {
        path: '/',
        component: LoginLayout,
        name: 'loginLayout'
    }  
]
Vue.use(Router)

const router = new Router({mode: 'history', routes: routes})

export default router