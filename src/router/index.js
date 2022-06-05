import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import SwiftyAssistant from "../components/SwiftyAssistant.vue";
import ContactPage from "../components/ContactPage.vue";

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/swifty-assistant',
    component: SwiftyAssistant,
  },
  {
    path: '/contact',
    component: ContactPage
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/"
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
