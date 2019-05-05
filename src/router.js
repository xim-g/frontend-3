import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Test from './views/Test.vue'
import Registro from './views/Registro.vue'
import results from './views/results.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Test',
      name: 'TEST',
      component: Test
    },
    {
      path: '/Registro',
      name: 'Registro',
      component: Registro
    },
    {
      path: '/results',
      name: 'results',
      component: results
    },
  ]
})
