<template>
  <WujieVue width="100%" height="100%" name="zhujianglng" :url="'http://10.0.32.118:3001/'" :alive="true" :sync="true"
    :plugins="plugins"
    :fetch="fetch" :props="{ data: '珠江lng', msg: 'hello' }" :beforeLoad="beforeLoad" :beforeMount="beforeMount"
    :afterMount="afterMount" :beforeUnmount="beforeUnmount" :afterUnmount="afterUnmount" :activated="activated"
    :deactivated="deactivated" :loadError="loadError"></WujieVue>
</template>

<script setup lang="ts">
const fetch = (url: string, options?: object) => {
  return window.fetch(url, { ...options, credentials: "omit" });
}

const plugins: Array<any> = [
  {
    jsLoader: (code: any, url: any, base: any) => {
      // const blob = new Blob([`importScripts("${base}decoder-pro-audio.js")`], {"type": 'application/javascript'});
      // const blobUrl = window.URL.createObjectURL(blob);
      // const script = `this.decoderWorker=new Worker('${blobUrl}')`
      // code = code.replace(/this\.decoderWorker=new Worker\(t\)/ig, script);

      // const script = `this.decoderWorker=new Worker('${window.origin}/decoder-pro-audio.js')`
      // code = code.replace(/this\.decoderWorker=new Worker\(t\)/ig, script);

      return code
    },
    htmlLoader: (code: any, url: any, base: any) => {
      code = code.replace(/\.\/web-player-pro\.js/, `${window.origin}/web-player-pro.js`)
      return code
    },
  },
];



const beforeLoad = (appWindow: any) => {
  console.log('beforeLoad===>zhujianglng')
}
const beforeMount = (appWindow: any) => {
  console.log('beforeMount===>zhujianglng')
}
const afterMount = (appWindow: any) => {
  console.log('afterMount===>zhujianglng')
}
const beforeUnmount = (appWindow: any) => {
  console.log('beforeUnmount===>zhujianglng')
}
const afterUnmount = (appWindow: any) => {
  console.log('afterUnmount===>zhujianglng')
}
const activated = (appWindow: any) => {
  console.log('activated===>zhujianglng')
}
const deactivated = (appWindow: any) => {
  console.log('deactivated===>zhujianglng')
}
const loadError = (url: any, err: any) => {
  console.log('loadError===>zhujianglng', url, err)
}

</script>