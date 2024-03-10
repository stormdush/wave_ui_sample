import 'wave-ui/dist/wave-ui.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import WaveUI from 'wave-ui'

const app = createApp(App)

app.use(WaveUI, { /* Some Wave UI options */ })
app.use(router)

app.mount('#app')
