import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import Product from '@/views/product'
<<<<<<< Updated upstream
import Intro from '@/views/intro'
=======
import Contact from '@/views/contact'
>>>>>>> Stashed changes

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: index
        },
        {
            path: '/intro',
            component: Intro
        },
        {
            path: '/product',
            component: Product
        },
        {
            path: '/contact',
            component: Contact
        }
    ]
})
