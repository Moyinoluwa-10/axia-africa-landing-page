import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Marquee from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(Vue3Marquee)

app.mount('#app')
