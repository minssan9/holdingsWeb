import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import Home from '../views/Home.vue'
import Menu from '../views/menu.vue'
import Login from '../views/auth/Login.vue'
import InvView from '../views/inv/invView.vue'
import ItemView from '../views/item/ItemView.vue'
import VuejsAbout from '../views/VuejsAbout.vue'

Vue.use(VueRouter)

const requireAuth = () => (to, from, next) => {
  // if (from==='/login'){
  //   from = '/'
  // }
  // !!store.state.access_token ? next() : next(`/login?returnPath=${encodeURIComponent(from.path)}`)
}

const requireManager = (to, from, next) => {

  // 액세스토큰이 있으면
  if (!!store.state.access_token) {
    // 권한이 ADMIN 이면
    if (!!store.state.account.roles && !!(store.state.account.roles.includes('ADMIN')))
      return next()
    else {
      alert('권한이 없습니다.')
      return next('/')
    }
  } else
    return next(`/login?returnPath=${encodeURIComponent(from.path)}`)
}

const router = new VueRouter({
  mode: 'history',
  // 스크롤 클릭시 맨 위로
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Menu,
      // beforeEnter: requireAuth(),
      children: [{
        path: '/',
        component: Home
      },
      {
        path: '/vuejs_about',
        component: VuejsAbout
      },
      {
        path: '/item',
        component: ItemView
      },
      {
        path: '/inv',
        component: InvView,
        props: true,
        // props : (route) => ({ viewName : route.query.q })
      }]
    }]
})

export default router
