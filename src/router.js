import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import CreatePoll from '@/views/CreatePoll'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: Home
        },
        /* 
        // и так и так работает!!!
        {
             path: '/createPoll',
             component: () =>
                 import ('./views/CreatePoll.vue')
         }
         */
        {
            path: '/createPoll',
            component: CreatePoll
        }
        /*,
                {
                    //надо закончить получение всех опросов с базы
                    path: '/getPoll',
                    component: getPoll
                }
        */

    ]
})