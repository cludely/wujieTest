<template>
  <WujieVue width="100%" height="100%" name="subapp1" :url="'http://10.0.32.118:5174/'" :alive="true" :sync="true"
    :plugins="plugins"
    :fetch="fetch" :props="{ data: '子应用1', msg: 'hello' }" :beforeLoad="beforeLoad" :beforeMount="beforeMount"
    :afterMount="afterMount" :beforeUnmount="beforeUnmount" :afterUnmount="afterUnmount" :activated="activated"
    :deactivated="deactivated" :loadError="loadError"></WujieVue>
</template>

<script setup lang="ts">
const fetch = (url: string, options?: object) => {
  return window.fetch(url, { ...options, credentials: "omit" });
}

const plugins = [
  {
    cssLoader: (code: any, url: any, base: any) => {
      return code;
    },
  },
  {
    jsLoader: (code: any, url: any, base: any) => {
      code = code.replace(/(var)(\s)(.+)(\s)=/ig, "window.$3 =")

      // const blob = new Blob([`importScripts("${base + 'js/a.ts'}")`], {"type": 'application/javascript'});
      // const blobUrl = window.URL.createObjectURL(blob);
      // code = code.replace(/new(\s)Worker\(\"\/js\/a\.js\"\)/ig, `new Worker('${blobUrl}')`)

      return code
    },
  },
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
  console.log('beforeLoad===>子应用1')
}
const beforeMount = (appWindow: any) => {
  console.log('beforeMount===>子应用1')
}
const afterMount = (appWindow: any) => {
  console.log('afterMount===>子应用1')
}
const beforeUnmount = (appWindow: any) => {
  console.log('beforeUnmount===>子应用1')
}
const afterUnmount = (appWindow: any) => {
  console.log('afterUnmount===>子应用1')
}
const activated = (appWindow: any) => {
  console.log('activated===>子应用1')
}
const deactivated = (appWindow: any) => {
  console.log('deactivated===>子应用1')
}
const loadError = (url: any, err: any) => {
  console.log('loadError===>子应用1', url, err)
}

</script>