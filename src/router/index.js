import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Home = () =>import('../views/Home')
// const Home = () =>import('../components/HelloWorld')
// const Js = () =>import('../views/js/Js')
const Js = () =>import('../views/js/Js')
const Jschild = () =>import('../views/js/jsChild')
const Vuechild =()=>import('../views/vue/vuechild')
const Csschild =()=>import('../views/css/csschild')
const Css = () =>import('../views/css/Css')
const Vues = () =>import('../views/vue/Vue')
const Login = ()=>import('../views/Login')
const User = ()=>import('../views/user/User')
const Publish = ()=>import('../views/user/Publish')
const Userdata = ()=>import('../views/user/Userdata')
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
    component:Js,
  },
  {
    path:"/js/:abc",
    component:Jschild,
  },
  {
    path:"/css",
    component:Css
  },
  {
    path:"/css/:abc",
    component:Csschild,
  },
  {
    path:"/vue",
    component:Vues
  },
  {
    path:"/vue/:abc",
    component:Vuechild,
  },
  {
    path:"/login",
    component:Login
  },
  {
    path:"/:username",
    component:User,
    children:[
      {
        path: "",
        redirect:'/:username/userdata'
      },
       {
           path:'publish',
           component:Publish
       },
       {
         path:"userdata",
         component:Userdata
       }
   ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
