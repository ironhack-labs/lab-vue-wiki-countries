import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
//import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css';

createApp(App).use(router).mount('#app')