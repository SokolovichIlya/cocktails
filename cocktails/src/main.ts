import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import lazyLoading from './directives/lazyLoading'

import '@/assets/scss/index.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyLoading)

app.mount('#app')
