import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'esp-web-tools/dist/web/install-button'

const app = createApp(App);
app.config.compilerOptions.isCustomElement = tag => tag.startsWith('esp-web-')
app.mount('#app')

// createApp(App).mount('#app')
