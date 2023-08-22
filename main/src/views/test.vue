<template>
  <WujieVue
    width="100%"
    height="100%"
    name="test"
    :url="'http://10.0.60.177:82/#/basic/camera'"
    :alive="true"
    :sync="true"
    :props="{data: 'test', msg: 'hello'}"
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
  console.log('beforeLoad===>test', appWindow)
}
const beforeMount = (appWindow: any) => {
  console.log('beforeMount===>test', appWindow)
}
const afterMount = (appWindow: any) => {
  console.log('afterMount===>test', appWindow)
}
const beforeUnmount = (appWindow: any) => {
  console.log('beforeUnmount===>test', appWindow)
}
const afterUnmount = (appWindow: any) => {
  console.log('afterUnmount===>test', appWindow)
}
const activated = (appWindow: any) => {
  console.log('activated===>test', appWindow)
}
const deactivated = (appWindow: any) => {
  console.log('deactivated===>test', appWindow)
}
const loadError = (url: any, err: any) => {
  console.log('loadError===>test', url, err)
}

</script>