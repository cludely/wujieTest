// import "./config.ts"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import './assets/main.css'

import { isWujie } from '@/utils/index'

if (isWujie()) {
  console.log('----无界环境----', window)
  let app: any;
  window.__WUJIE_MOUNT = () => {
    app = createApp(App);
    app.use(createPinia())
    app.use(router);
    app.mount("#app");
  };
  window.__WUJIE_UNMOUNT = () => {
    app.unmount();
  };
} else {
  console.log('----非无界环境----')
  const app = createApp(App)
  app.use(createPinia())
  app.use(router)
  app.mount("#app");
}

