<template>
  <el-container class="container" direction="vertical">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <Nav></Nav>
      </el-aside>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Nav from './nav.vue'

</script>

<style lang="css">
.container {
  width: 100%;
  height: 100%;
}
.el-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.el-header {
  background-color: lightgreen;
}

.el-aside {
  background-color: #545c64;
}

.el-main {
  background-color: #ffffff;
  overflow-y: auto;
}

.el-footer {
  background-color: lightgreen;
}
</style>