import { createRouter, createWebHistory } from "vue-router";
import JourneyPage from '@/pages/journey/JourneyPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      redirect: '/journey'
    },
    {
      name: 'journey',
      path: '/journey',
      component: JourneyPage
    }
  ]
})