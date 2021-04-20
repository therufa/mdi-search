import { createApp } from 'vue'
import { iconPlugin } from './plugins/icons'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/index.scss'

createApp(App)
  .use(iconPlugin)
  .use(store)
  .use(router)
  .mount('#app')
