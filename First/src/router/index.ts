import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../Home.vue'
import li1 from '../components/Test.vue'
import Person from '../view/Person.vue'
import Login from '../view/Login.vue'
import Main from '../view/Main.vue'
import Register from '../view/Register.vue'
import Museum from '../view/Museum.vue'
import Edit from '../view/Edit.vue'
import Comment from '../view/Comment.vue'
import axios from 'axios'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Main',
        components: { Main: Main },
        meta: {
            //设置页面是否缓存
            keepAlive: true,
        }
    },
    {
        path: '/Museum',
        name: 'Museum',
        components: { Museum: Museum },
        beforeEnter: (to, from, next) => {
            axios.get("../E-MUSEUM/online", {
                params: {
                    id: 0,
                }
            }).then((res) => {
                console.log(res)
                if (res.data === null) {
                    console.log(to)
                    next('/Login');
                }
                else {
                    next()
                }
            })
        }
    },
    {
        path: '/Comment',
        name: 'Comment',
        components: { Comment: Comment }
    },
    {
        path: '/Login',
        name: 'Login',
        components: { Login: Login },
    },
    {
        path: '/Register',
        name: 'Register',
        components: { Register: Register }
    },
    {
        path: '/Person/:id?',
        name: 'Person',
        components: { Person: Person },
        beforeEnter: (to, from, next) => {
            axios.get("../E-MUSEUM/online", {
                params: {
                    id: 0,
                }
            }).then((res) => {
                console.log(res)
                if (res.data === null) {
                    console.log(to)
                    next('/Login');
                }
                else {
                    next()
                }
            })
        }
    },
    {
        path: '/Edit',
        name: 'Edit',
        components: { Edit: Edit }
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    next()
})

export default router
