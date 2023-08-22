<template>
  <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" :default-active="active"
    text-color="#fff" @open="handleOpen" @close="handleClose">
    <template v-for="(route, index) in routesFilter">
      <el-sub-menu v-if="route.children && route.children.length" :index="route.path">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>{{ route?.meta?.title }}</span>
        </template>
        <el-menu-item v-for="(item, i) in route.children" :index="item.path" @click="menuItemClick($event, item)">{{
          item.meta.title }}</el-menu-item>
      </el-sub-menu>
      <el-menu-item v-else :index="route.path" @click="menuItemClick($event, route)">
        <template #title>
          <el-icon>
            <setting />
          </el-icon>
          <span>{{ route?.meta?.title }}</span>
        </template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Setting, Location } from '@element-plus/icons-vue'
import { routes } from '@/router/index.ts'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
console.log(route)
const active = ref(route.path)

const routesFilter = routes.filter((d: any) => d.path)

const menuItemClick = (key: Object, route: any) => {
  router.push(route)
}


const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}


</script>