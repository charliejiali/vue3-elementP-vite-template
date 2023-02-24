import { createApp } from 'vue'
import App from './App.vue'

import 'element-plus/dist/index.css'
import '@/styles/index.scss'

import router from './router'

import 'virtual:svg-icons-register'
import svgIcon from '@/components/SvgIcon/index.vue'

import '@/permission'

import { createPinia } from 'pinia'
const pinia = createPinia()

createApp(App)
  .component('svg-icon', svgIcon)
  .use(router)
  .use(pinia)
  .mount('#app')
