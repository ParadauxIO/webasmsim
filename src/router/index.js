import {createRouter, createWebHistory} from 'vue-router'
import Editor from "@/components/Editor";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Editor
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
