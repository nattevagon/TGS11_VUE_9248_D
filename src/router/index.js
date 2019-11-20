import Vue from 'vue'
import Router from 'vue-router'

const DashboardLayout = () => import(/*webpackChunkName:"dashboard"*/'../components/dashboardLayout.vue')

function loadView(view){
    return()=>import(/*webpackChunkName:"view-[request]"*/`../components/dashboardContents/${view}.vue`)
}

const routes = [
    {
        path:'/',
        component: DashboardLayout,
        children: [
            {
                name: 'Login',
                path: '',
                component: loadView('login')
            },
            {
                name: 'Home',
                path: 'home',
                component: loadView('landingPage')
            },
            {
                name: 'User Controller',
                path: 'user',
                component: loadView('userController')
            },
            {
                name: 'Layanan Kendaraan',
                path: 'services',
                component: loadView('servicesController')
            }
        ]
    },
]
Vue.use(Router)

const router = new Router({mode: 'history', routes: routes})

export default router