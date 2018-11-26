import Vue from 'vue'
import Router from 'vue-router'
import InputForm from '@/components/InputForm'
import Thanks from '@/components/Thanks'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'inputForm',
            component: InputForm
        },
        {
            path: '/thanks',
            name: 'Thanks',
            component: Thanks
        }
    ]
})
