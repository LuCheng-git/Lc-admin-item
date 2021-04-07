<!--  -->
<template>
  <aside class="sidebar">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <!-- 折叠按钮 -->
      <div class="collapse-btn" @click="collapseChange">
        <i class="el-icon-d-arrow-left" v-if="!collapse" title="收起">
          &emsp;&emsp;
          <small>收缩侧边栏</small>
        </i>
        <i
          class="el-icon-d-arrow-right"
          style="color: #fff;font-weight:700;float: left;margin: 5px 0 0 21px;"
          v-else
          title="展开"
        >
        </i>
      </div>
      <el-menu
        class="sidebar-el-menu"
        default-active="2"
        :collapse="collapse"
        background-color="#001529"
        text-color="#8d9199"
        active-text-color="#fff"
        unique-opened
        collapse-transition
        mode="vertical"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </aside>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    return {
      collapse: false,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    collapseChange(){
       this.collapse = !this.collapse;
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
.sidebar {
  z-index: 1024;
  display: block;
  position: fixed;
  left: 0;
  top: 65px;
  bottom: 0;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #001529;
}
/*侧边的滚动条样式*/
.sidebar::-webkit-scrollbar-track {
  border-radius: 2px;
  background-color: #f5f5f5;
}

.sidebar::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
  border-radius: 2px;
}

.sidebar::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background-color: #555;
}

.sidebar-el-menu:not(.el-menu--collapse) {
  width: 200px;
}

.el-menu {
  margin-top: 30px;
  background-color: #001529 !important;
  border-right: none;
}
/*最上面按钮*/
.collapse-btn {
  height: 30px;
  width: 200px;
  cursor: pointer;
  line-height: 30px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #001529;
  color: #fff;
  text-align: center;
  overflow: hidden;
  box-sizing: border-box;
  z-index: 100;
}
.collapse-btn i {
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  text-overflow: ellipsis;
}
</style>
