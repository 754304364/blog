import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Home = () =>import('../views/Home')
const Js = () =>import('../views/Js')
const Css = () =>import('../views/Css')
const Vues = () =>import('../views/Vue')
const Login = ()=>import('../views/Login')
const routes = [
  {
    path: '',
    redirect:'/home'
  },
  {
    path:"/home",
    component:Home
  },
  {
    path:"/js",
    component:Js
  },
  {
    path:"/css",
    component:Css
  },
  {
    path:"/vue",
    component:Vues
  },
  {
    path:"/login",
    component:Login
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
