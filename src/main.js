import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import { MotionPlugin } from '@vueuse/motion'
import 'element-plus/dist/index.css'

createApp(App).use(router).use(ElementPlus).use(MotionPlugin).mount('#app')
