import Vue from 'vue'
import Router from 'vue-router'
import HomeMainPage from '@/components/home_page/MainPage'
import CategoryMainPage from '@/components/category_page/MainPage'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeMainPage
        },
        {
            path: '/category/:name',
            name: 'Chosen Category',
            props: true,
            component: CategoryMainPage
        }
    ]
})
