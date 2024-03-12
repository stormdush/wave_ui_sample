import 'wave-ui/dist/wave-ui.css';
import '@mdi/font/css/materialdesignicons.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import WaveUI from 'wave-ui';
import apiService from '../utils/axios.js';

const app = createApp(App);
apiService.apiService.init();

app.use(WaveUI, { /* Some Wave UI options */ });
app.use(router);

app.mount('#app');
