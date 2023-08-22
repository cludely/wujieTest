<template>
  <WujieVue
    width="100%"
    height="100%"
    name="subapp2"
    :url="'http://10.0.32.118:5175/'"
    :alive="true"
    :sync="true"
    :props="{data: '子应用2', msg: 'hello'}"
    :beforeLoad="beforeLoad"
    :beforeMount="beforeMount"
    :afterMount="afterMount"
    :beforeUnmount="beforeUnmount"
    :afterUnmount="afterUnmount"
    :activated="activated"
    :deactivated="deactivated"
    :loadError="loadError"
  ></WujieVue>
</template>

<script setup lang="ts">
const beforeLoad = (appWindow: any) => {
  console.log('beforeLoad===>子应用2')
}
const beforeMount = (appWindow: any) => {
  console.log('beforeMount===>子应用2')
}
const afterMount = (appWindow: any) => {
  console.log('afterMount===>子应用2')
}
const beforeUnmount = (appWindow: any) => {
  console.log('beforeUnmount===>子应用2')
}
const afterUnmount = (appWindow: any) => {
  console.log('afterUnmount===>子应用2')
}
const activated = (appWindow: any) => {
  console.log('activated===>子应用2')
}
const deactivated = (appWindow: any) => {
  console.log('deactivated===>子应用2')
}
const loadError = (url: any, err: any) => {
  console.log('loadError===>子应用2', url, err)
}

</script>