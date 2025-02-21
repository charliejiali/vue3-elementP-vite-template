import svgIcon from '@/components/SvgIcon/index.vue'
import { createPinia } from 'pinia'

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import 'element-plus/dist/index.css'
import '@/styles/index.scss'

import 'virtual:svg-icons-register'

import '@/permission'

const pinia = createPinia()

createApp(App)
  .component('svg-icon', svgIcon)
  .use(router)
  .use(pinia)
  .mount('#app')
