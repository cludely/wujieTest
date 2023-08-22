import 'animate.css'

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import WujieVue from "wujie-vue3";
import lifecycles from "./lifecycles";
const { setupApp, preloadApp, bus } = WujieVue;

// setupApp({
//   name: "subapp1",
//   url: "http://10.0.32.118:5174/",
//   exec: true,
//   props: {data: '子应用1', msg: 'hello'},
//   fetch: function fetch(url, options) {
//     console.log("fetch.url:=",url,options)
//     return window.fetch(url, { ...options, credentials: "omit" });
//   },
//   ...lifecycles,
// });

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(WujieVue)

localStorage.setItem('hjj', '2')
localStorage.setItem('hjj2', 'aaaa')

app.mount('#app')
