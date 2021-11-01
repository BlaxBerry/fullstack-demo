import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(store).use(router)

import { Button } from 'vant';
app.use(Button)

app.mount('#app')
