import { createApp } from 'vue'
import App from './App.vue'
import './index.css'


const app = createApp(App);
app.config.compilerOptions.isCustomElement = tag => tag.startsWith('esp-web-')
app.mount('#app')
