import { createApp } from 'vue'
import App from './App.vue'
import '@vant/touch-emulator'
import { Button } from 'vant'
import 'vant/lib/index.css'
import router from './route'
// import axios from 'axios'

createApp(App)
  .use(Button)
  .use(router)
  // .use(axios)
  .mount('#app')
