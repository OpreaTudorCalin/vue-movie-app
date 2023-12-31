import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js';


const app = createApp(App, router);

app.use(router);

app.mount('#app')
