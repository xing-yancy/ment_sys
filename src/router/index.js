import Vue from 'vue'
import VueRouter from 'vue-router'

import main from '@/views/main/index'
import login from '@/views/login/index'
import logon from '@/views/logon/index'
import error from '@/views/error/index'
import stuAdd from '@/views/main/stuAdd/index'
import stuList from '@/views/main/stuList/index'

import cookie from '@/util/cookie'

Vue.use(VueRouter)

const routes = [
  {
    path:"/main",
    component:main,
    redirect:'/main/stulist',
    children:[
      {
        path:'stuadd',
        component:stuAdd,
      },
      {
        path:'stuList',
        component:stuList,
      }
    ]
  },
  {
    path:"/login",
    component:login,
  },
  {
    path:"/logon",
    component:logon,
  },
  {
    path:"/error",
    component:error,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass:'active'
})

router.beforeEach((to,from,next)=>{
  if(to.path === '/'){
    next('/main');
  }else if(to.matched.length === 0){
    next('/error');
  }
  
  if(to.matched[0] && to.matched[0].path === '/main'){
    const username = cookie.getCookie('username');
    if(username){
      next();
    }else{
      next('/login');
    }
  }
  next();
})

export default router
