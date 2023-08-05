import { createApp } from 'vue'
import 'normalize.css'
import '@/assets/css/index.css'
import App from './App.vue'
import { router } from './router'
import icons from './global/register-icon'
import pinia from './stores'

createApp(App).use(icons).use(pinia).use(router).mount('#app')
