import { createPinia } from 'pinia';
import { createApp } from 'vue'

import App from './App.vue'
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';

createApp(App).use(router).use(createPinia()).mount('#app')
