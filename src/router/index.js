import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
      // component: () => import('@/pages/home/Home') 异步组件加载，
      // 只加载当前页面的js，如果当项目小的时候咋不需要使用异步组件实现按需加载，超过1M的项目组件则可以使用异步组件加载
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id', // 动态路由，前面的路由必须是 /detail/ 后面可以携带一个参数，存放在 id 的变量中
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
