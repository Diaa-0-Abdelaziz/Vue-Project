import './index.css'
import 'primeicons/primeicons.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'flag-icons/css/flag-icons.min.css';
import i18n from './i18n'
const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')