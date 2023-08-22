<template>
  <main class="home">
    <h1 style="font-size: 30px;margin-bottom: 30px;">子应用1 Home页面</h1>

    <el-row style="margin: 30px 0;">
      <el-col :span="24">
        <el-row class="title">
          <el-col :span="24">弹窗</el-col>
        </el-row>
        <el-row>
          <el-button @click="showMessage">消息提示</el-button>
          <el-button type="info" @click="showMessageBox">消息弹窗</el-button>
          <el-button type="warning" @click="showNotification">Notification通知</el-button>
          <el-button type="primary" @click="showDialog = true">Dialog对话框</el-button>
          <el-button type="success" @click="showDrawer = true">Drawer画框</el-button>
          <el-button type="danger">Danger</el-button>
        </el-row>
      </el-col>
    </el-row>
    <el-dialog v-model="showDialog" title="Notice" width="30%" destroy-on-close center>
      <span>我是Dialog对话框</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="showDialog = false">取消</el-button>
          <el-button type="primary" @click="showDialog = false">确认</el-button>
        </span>
      </template>
    </el-dialog>
    <el-drawer v-model="showDrawer" direction="rtl">
      <template #header>
        <h4>头部</h4>
      </template>
      <template #default>
        <div>
          <el-radio label="选项1" size="large">选项1</el-radio>
          <el-radio label="选项1" size="large">选项2</el-radio>
        </div>
      </template>
      <template #footer>
        <div style="flex: auto">
          <el-button @click="showDrawer = false">取消</el-button>
          <el-button type="primary" @click="showDrawer = false">确认</el-button>
        </div>
      </template>
    </el-drawer>

    <el-row style="margin: 30px 0;">
      <el-col :span="24">
        <el-row class="title">
          <el-col :span="24">DOM操作</el-col>
        </el-row>
        <el-button id="btn" type="danger" @click="domHandle">点击平移</el-button>
      </el-col>
    </el-row>

    <el-row style="margin: 30px 0;">
      <el-col :span="24">
        <el-row class="title">
          <el-col :span="24">状态持久化</el-col>
        </el-row>
        <el-row>
          <el-button type="primary" @click="counterStore.count++">加1</el-button>
          <el-button type="primary" @click="counterStore.count--">减1</el-button>&nbsp;&nbsp;&nbsp;&nbsp;
          count: {{ counterStore.count }}&nbsp;&nbsp;&nbsp;&nbsp;doubleCount: {{ counterStore.doubleCount }}
        </el-row>
        <el-row class="resolve"></el-row>
      </el-col>
    </el-row>

    <el-row style="margin: 30px 0;">
      <el-col :span="24">
        <el-row class="title">
          <el-col :span="24">本地存储</el-col>
        </el-row>
      </el-col>
    </el-row>


    <el-row style="margin: 30px 0;">
      <el-col :span="24">
        <el-row class="title">
          <el-col :span="24">子应用的字体没有生效</el-col>
        </el-row>
        <el-row>
          <el-col :span="6" style="font-family: RZY;">English语文234</el-col>
          <el-col :span="6" style="font-family: number;">123456</el-col>
        </el-row>
        <el-row class="resolve">
          <el-col :span="24">
            1、在index.html文件引入字体定义<br />
            2、将字体在放主应用中定义</el-col>
        </el-row>
      </el-col>
    </el-row>


    <el-row style="margin: 30px 0;">
      <el-col :span="24">
        <el-row class="title">
          <el-col :span="24">冒泡系列组件（比如下拉框）弹出位置不正确</el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-select v-model="value" placeholder="Select">
              <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: var(--el-text-color-secondary); font-size: 13px;">{{ item.value
                }}</span>
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            <el-date-picker type="week" format="[Week] ww" placeholder="Pick a week" />
          </el-col>
          <el-col :span="12">
            <el-popconfirm title="确认删除？">
              <template #reference>
                <el-button type="danger">气泡确认框</el-button>
              </template>
            </el-popconfirm>
            <el-popover placement="bottom" title="弹出" :width="200" trigger="click" content="Popover气泡卡片">
              <template #reference>
                <el-button type="success">Popover气泡卡片</el-button>
              </template>
            </el-popover>
            <el-tooltip effect="dark" content="Tooltip 文字提示" placement="bottom-end">
              <el-button type="primary">Tooltip文字提示</el-button>
            </el-tooltip>
          </el-col>
        </el-row>
        <el-row class="resolve">
          <el-col :span="24">给子应用的body标签添加position: relative;</el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row style="margin: 30px 0;">
      <el-col :span="24">
        <el-row class="title">
          <el-col :span="24">子应用处理异步事件时，e.target 变成了 wujie-app</el-col>
        </el-row>
        <el-row>
          <el-button type="primary" @click="test5">触发click事件</el-button>
        </el-row>
        <el-row class="resolve">
          1、使用自定义变量保存e.target的引用，再在异步函数内部使用这个自定义变量<br/>
          2、e.composedPath()[0]
        </el-row>
      </el-col>
    </el-row>

    <el-row style="margin: 30px 0;">
      <el-col :span="24">
        <el-row class="title">
          <el-col :span="24">css 样式内部的相对地址相对的是主应用的域名</el-col>
        </el-row>
        <el-row>
          <div class="test6"></div>
        </el-row>
        <el-row class="resolve">
          1、图片上传至CDN，css中直接引用CDN地址<br />
          2、将图片打包成base64<br />
          3、使用css-loader plugins将相对地址代码替换成绝对地址<br/>
          4、无界框架目前默认使用方案三自动处理<br/>
          5、但测试结果是如果使用 unplugin-vue-components 或者 unplugin-element-plus 会使css-loader失效，导致图片获取不到？？？<br/>
          如下：<br/>
          main.ts：import 'element-plus/dist/index.css'<br/>
          Home.vue：import { ElButton } from 'element-plus'
        </el-row>
      </el-col>
    </el-row>

    <el-row style="margin: 30px 0;">
      <el-col :span="24">
        <el-row class="title">
          <el-col :span="24">子应用的动态相对地址图片没有替换成绝对地址</el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-button type="success" @click="togglePicture">切换图片</el-button>
          </el-col>
          <el-col :span="12">
            <el-button type="success" @click="addPicture">添加图片</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <img :src="url" style="width: 300px;height: 200px;" />
          </el-col>
          <el-col :span="12" v-html="pictureHtml" id="domPicture"></el-col>
        </el-row>
      </el-col>
    </el-row>


    <el-row style="margin: 30px 0;">
      <el-col :span="24">
        <el-row class="title">
          <el-col :span="24">第三方包已经引入，使用时报错</el-col>
        </el-row>
        <el-row class="resolve">
          1、index.html<br/>
          2、使用js-loader将var xxx = xxx替换为window.xxx = xxx
        </el-row>
      </el-col>
    </el-row>

    <el-row style="margin: 30px 0;">
      <el-col :span="24">
        <el-row class="title">
          <el-col :span="24">vite4 在单例模式下切换子应用导致样式丢失</el-col>
        </el-row>
        <el-row class="resolve">
          <a href="https://github.com/Tencent/wujie/issues/434#issuecomment-1614089196">在单例模式下切换子应用导致样式丢失</a><br/>
          1、使用patchElementHook插件修改insertAdjacentElement，可以解决样式丢失的问题，但element-plus的冒泡类组件会报错，导致应用加载不出来<br/>
          2、使用patchElementHook插件可以解决子应用的自定义字体没有生效的问题<br/>
          3、使用保活模式
        </el-row>
      </el-col>
    </el-row>



    





  </main>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage, ElMessageBox, ElNotification, ElButton, 
  ElHeader, ElContainer, ElFooter, ElMain, ElMenu, ElMenuItem, ElMenuItemGroup, ElSubMenu, ElPopconfirm,
  ElRow, ElCol, ElDialog, ElRadio, ElDrawer, ElOption, ElSelect, ElDatePicker, ElPopover, ElTooltip } from 'element-plus'
import { useCounterStore } from '@/stores/counter'

const showDialog = ref(false)
const showDrawer = ref(false)

const value = ref('')
const cities = [
  { value: 'Beijing', label: '北京' },
  { value: 'Shanghai', label: '上海' },
  { value: 'Nanjing', label: '南京' },
]

import timeJPG from '@/assets/image/time.jpg'
import PNG from '@/assets/image/2.png'
// const timeJPG = '../../src/assets/image/time.jpg'
// const PNG = '../../src/assets/image/2.png'

const url = ref(timeJPG)
const togglePicture = () => {
  if(url.value == timeJPG) {
    url.value = PNG
  } else {
    url.value = timeJPG
  }
}

const pictureHtml = ref('')
const addPicture = () => {
  if(url.value == timeJPG) {
    pictureHtml.value = `<img src="${PNG}" style="width: 300px;height: 200px;" />`
  } else {
    pictureHtml.value = `<img src="${timeJPG}" style="width: 300px;height: 200px;" />`
  }
  // const img = document.createElement('img')
  // img.src = timeJPG
  // img.style.width = '300px'
  // img.style.height = '200px'
  // const box = document.querySelector('#domPicture')
  // box?.appendChild(img)
}

const counterStore = useCounterStore()

const test5 = (e: any) => {
  console.log(e, e.target)
  // const target = e.target
  setTimeout(() => {
    const target = (e.target.shadowRoot && e.composed) ? (e.composedPath()[0] || e.target) : e.target
    console.log(target, e.composedPath())
  })
}

const domHandle = (e: any) => {
  const btn: any = document.querySelector('#btn')
  btn.style.transition = '1s'
  btn.style.transform = 'translateX(150px)'
}

const showMessage = () => {
  ElMessage({
    message: '提示消息',
    type: 'success',
  })
}
const showMessageBox = () => {
  ElMessageBox.confirm(
    '确认吗',
    'Warning',
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).then(() => {
    ElMessage({
      type: 'success',
      message: '确认',
    })
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: '取消',
    })
  })
}
const showNotification = () => {
  ElNotification({
    title: 'Success',
    message: '这是一条成功的消息通知',
    type: 'success',
  })
}
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

.test6 {
  width: 200px;
  height: 150px;
  background: url('../../assets/image/time.jpg') no-repeat center center;
  background-size: 100% 100%;
}
</style>