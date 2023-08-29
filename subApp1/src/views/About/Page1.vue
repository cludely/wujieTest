<template>
  <div class="about">
    <el-row style="margin: 30px 0;">
      <el-col :span="24">
        <el-row class="title">
          <el-col :span="24">跨域</el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row style="margin: 30px 0;">
      <el-col :span="24">
        <el-row class="title">
          <el-col :span="24">单点登录\token分发</el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row style="margin: 30px 0;">
      <el-col :span="24">
        <el-row class="title">
          <el-col :span="24">布局优化与样式统一、主题同步</el-col>
        </el-row>
        <el-row>
          height: window.__POWERED_BY_WUJIE__ ? '100%' : '100vh'<br/>
          v-if="!window.__POWERED_BY_WUJIE__"
        </el-row>
      </el-col>
    </el-row>

    <el-row style="margin: 30px 0;">
      <el-col :span="24">
        <el-row class="title">
          <el-col :span="24">本地存储优化</el-col>
        </el-row>
        <el-row>
          同名覆盖
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ElMessage, ElMessageBox, ElNotification, ElButton, 
  ElHeader, ElContainer, ElFooter, ElMain, ElMenu, ElMenuItem, ElMenuItemGroup, ElSubMenu, ElPopconfirm,
  ElRow, ElCol, ElDialog, ElRadio, ElDrawer, ElOption, ElSelect, ElDatePicker, ElPopover, ElTooltip } from 'element-plus'

</script>

<style scoped>
.title {
  color: green;
  margin-bottom: 30px;
  font-size: 22px;
  font-weight: bold;
}

.resolve {
  color: blue;
  margin-top: 30px;
}
</style>
