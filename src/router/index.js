import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// layout 布局
const backStage = r => {
  return require.ensure(
    [],
    () => r(require('@/components/Layout/index')),
    'layout'
  )
}
// 首页
const home = r => {
  return require.ensure(
    [],
    () => r(require('@/page/home')),
    'home'
  )
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      hidden: true
    },
    {
      path: '/backstage',
      name: 'backstage',
      component: backStage,
      // redirect: '/home',
      hidden: true,
      meta: { title: '首页', icon: 'example' },
      children: [
        {
          path: 'home',
          component: home,
          meta: { title: '首页', icon: 'example' }
        }
      ]
    }
  ]
})
