import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/codemirror/codemirror.min.css'
import './assets/codemirror/codemirror.min'
import './assets/bulma/bulma.min.css'

createApp(App).use(router).mount('#app')
