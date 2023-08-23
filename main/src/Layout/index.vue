<template>
  <el-container class="container" direction="vertical">
    <el-header class="header">
      <div class="logo">logo</div>
      <div class="nav">
        <Nav></Nav>
      </div>
    </el-header>
    <el-container>
      <!-- <el-aside class="aside" width="200px"></el-aside> -->
      <el-main class="main">
        <RouterView />
      </el-main>
    </el-container>
    <el-footer class="footer">Footer</el-footer>
  </el-container>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Nav from './navV2.vue'

</script>

<style lang="css" scoped>
.container {
  width: 100%;
  height: 100%;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: lightgreen;
  padding: 0;
}
.logo {
  width: 200px;
  height: 100%;
  background: url('@/assets/image/logo.png') no-repeat center center;
  background-size: 100% 100%;
}
.nav {
  flex: 1;
}

.el-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}


.aside {
  background-color: #545c64;
}

.main {
  background-color: #ffffff;
  overflow-y: auto;
  padding: 0;
}

.footer {
  background-color: lightgreen;
}

</style>