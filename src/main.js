import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'


const app = createApp(App);
app.config.compilerOptions.isCustomElement = tag => tag.startsWith('esp-web-')
app.use(router)
app.mount('#app')
