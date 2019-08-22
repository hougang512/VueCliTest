import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home/Home'
import FreeCourse from '@/components/FreeCourse/FreeCourse'
import Test1 from '@/components/Home/Test1/Test1'


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home,
            children: [
                {
                    path: 'test1',
                    name: 'test1',
                    component: Test1
                },
            ]
        },

        {
            path: '/free',
            name: 'free',
            component: FreeCourse
        },
    ]
})
