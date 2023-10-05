import Vue from 'vue'
import VueRouter from 'vue-router'
import Skull from '../components/Skull.vue'
import AppAccounts from '../components/AppAccounts.vue'
import HomePage from '../components/HomePage.vue' // Import the HomePage component

Vue.use(VueRouter)

const routes = [
  {
    path: '/',  // Add a path for the root URL
    name: 'Home', // Name it 'Home'
    component: HomePage  // And use HomePage as the component
  },
  {
    path: '/skull',
    name: 'Skull',
    component: Skull
  },
  {
    path: '/accounts',
    name: 'AppAccounts',
    component: AppAccounts
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
