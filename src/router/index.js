import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Contact from '@/components/Contact'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'about',
      component: About
    },
        {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
