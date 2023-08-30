import 'animate.css'

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import WujieVue from "wujie-vue3";
import lifecycles from "./lifecycles";
const { setupApp, preloadApp, bus } = WujieVue;

// 设置子应用的默认配置
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

localStorage.setItem('test', '2')
localStorage.setItem('main', 'main')

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(WujieVue)


app.mount('#app')
