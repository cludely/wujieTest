<template>
  <WujieVue width="100%" height="100%" name="aitraining" :url="'http://10.0.32.118:3000/'" :alive="true" :sync="true"
    :plugins="plugins"
    :fetch="fetch" :props="{ data: '铁越算法训练平台', msg: 'hello' }" :beforeLoad="beforeLoad" :beforeMount="beforeMount"
    :afterMount="afterMount" :beforeUnmount="beforeUnmount" :afterUnmount="afterUnmount" :activated="activated"
    :deactivated="deactivated" :loadError="loadError"></WujieVue>
</template>

<script setup lang="ts">
const fetch = (url: string, options?: object) => {
  return window.fetch(url, { ...options, credentials: "omit" });
}

const plugins: Array<any> = [
  // {
  //   patchElementHook(element: any, iframeWindow: any) {
  //     if (element.nodeName === "STYLE") {
  //       element.insertAdjacentElement = function (_position: any, ele: any) {
  //         iframeWindow.document.head.appendChild(ele);
  //       };
  //     }
  //   },
  // },
];



const beforeLoad = (appWindow: any) => {
  console.log('beforeLoad===>aitraining')
}
const beforeMount = (appWindow: any) => {
  console.log('beforeMount===>aitraining')
}
const afterMount = (appWindow: any) => {
  console.log('afterMount===>aitraining')
}
const beforeUnmount = (appWindow: any) => {
  console.log('beforeUnmount===>aitraining')
}
const afterUnmount = (appWindow: any) => {
  console.log('afterUnmount===>aitraining')
}
const activated = (appWindow: any) => {
  console.log('activated===>aitraining')
}
const deactivated = (appWindow: any) => {
  console.log('deactivated===>aitraining')
}
const loadError = (url: any, err: any) => {
  console.log('loadError===>aitraining', url, err)
}

</script>