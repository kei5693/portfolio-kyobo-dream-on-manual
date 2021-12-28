import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main.vue'
import Manual from '../views/Manual.vue'
import Best5 from '../views/Best5.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/Main/:slideIndex',
    name: 'Main',
    component: Main,
    props: (route) => {
      const slideIndex = parseInt(route.params.slideIndex);
      return { slideIndex }
    }
  },
  {
    path: '/Manual/:mainIndex/',
    name: 'Manual',
    component: Manual,
    props: (route) => {
      const mainIndex = parseInt(route.params.mainIndex);
      return { mainIndex }
    }
  }, 
  {
    path: '/best5',
    name: 'Best5',
    component: Best5
  }, 
]

const router = new VueRouter({
  routes
})

export default router