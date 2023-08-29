<template>
  <el-menu mode="horizontal" active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" :default-active="active"
    text-color="#fff" @open="handleOpen" @close="handleClose">
    <el-menu-item index="subapp1" @click="menuItemClick($event, '/subapp1')">
      <template #title>
        <el-icon>
          <setting />
        </el-icon>
        <span>子应用1</span>
      </template>
    </el-menu-item>
    <el-menu-item index="subapp2" @click="menuItemClick($event, '/subapp2')">
      <template #title>
        <el-icon>
          <setting />
        </el-icon>
        <span>子应用2</span>
      </template>
    </el-menu-item>
    <el-menu-item index="aitraining" @click="menuItemClick($event, '/aitraining')">
      <template #title>
        <el-icon>
          <setting />
        </el-icon>
        <span>AI训练平台</span>
      </template>
    </el-menu-item>
    <el-menu-item index="zhujianglng" @click="menuItemClick($event, '/zhujianglng')">
      <template #title>
        <el-icon>
          <setting />
        </el-icon>
        <span>珠江lng</span>
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { Setting } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()

const active = ref('subapp1')

const menuItemClick = (item: Object, path: string) => {
  router.push(path)
}

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}


</script>

<style lang="css" scoped>
::v-deep.el-menu {
  border: none;
  height: 60px;
}
</style>