import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/index'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Settings from './pages/settings'

const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  routes: [
    {
      path: '/',
      component: Index,
      name: 'index',
      hidden: true
    },
    {
      path: '/login',
      component: Login,
      name: 'login',
      hidden: true,
      noCache: true,
      meta: {
        title: 'Login'
      }
    },
    {
      path: '/dashboard',
      component: Dashboard,
      name: 'dashboard',
      meta: {
        title: 'Dashboard',
        icon: 'menu',
        affix: true
      }
    },
    {
      path: '/settings',
      component: Settings,
      name: 'settings',
      meta: {
        title: 'Settings',
        icon: 'setting'
      }
    }
  ],
  fallback: false,
  scrollBehavior: () => ({ y: 0 })
}

export function createRouter() {
  return new Router(routerOptions)
}
