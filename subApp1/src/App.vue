<template>
  <div :class="isWujie() ? 'wujie' : 'not-wujie'">
    <el-container class="container" direction="vertical">
      <el-header v-if="!isWujie()">Header</el-header>
      <el-container>
        <!-- <el-aside v-if="!isWujie()" width="200px">
          <Nav></Nav>
        </el-aside> -->
        <el-aside width="200px">
          <Nav></Nav>
        </el-aside>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
      <!-- <el-footer v-if="!isWujie()">Footer</el-footer> -->
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Nav from '@/Layout/nav.vue'
import { isWujie } from '@/utils/index'
import { ElButton, ElHeader, ElContainer, ElFooter, ElMain, ElAside, ElMenu, ElMenuItem, ElMenuItemGroup, ElSubMenu } from 'element-plus'
</script>

<style scoped>
.not-wujie {
  width: 100%;
  height: 100vh;
}
.wujie {
  width: 100%;
  height: 100%;
}
</style>

<style>
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

/* .el-footer {
  background-color: lightgreen;
} */

@font-face {
  font-family: 'RZY';
  src: url('@/assets/font/RuiZiYunZiKuZongYiTiGBK-1.ttf');
}

@font-face {
  font-family: 'number';
  src: url('@/assets/font/298-CAI978.TTF');
}


</style>
