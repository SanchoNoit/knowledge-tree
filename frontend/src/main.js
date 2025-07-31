import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// ################## BOOTSTRAP
// Import our custom CSS
import '@/scss/styles.scss'

// Import all of Bootstrap’s JS
import 'bootstrap'

// ################## ROUTER ####################
import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('@/views/Home.vue')

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home, name: 'home' },
  { path: '/:pathMatch(.*)*', component: Home, name: 'home' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
