import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Counter from '@/components/Count'
import SignIn from '@/components/SignIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hi',
      name: 'Hi',
      component: Hi
    },
    {
      path: "/count",
      name: 'counter',
      component: Counter
    },

    {
      path: "/sign",
      name: 'signin',
      component: SignIn
    }
  ]
})
