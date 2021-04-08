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
        <side-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
         />
      </el-menu>
    </el-scrollbar>
  </aside>
</template>

<script>
import SideItem from "./sideItem";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {SideItem},
  data() {
    return {
      collapse: false,
      screenWidth: document.body.clientWidth,
      timer: false
    };
  },
  //监听属性 类似于data概念
  computed: {
    routes(){
      return this.$router.options.routes;
    }
  },
  //监控data中的数据变化
  watch: {
    //实时根据屏幕宽度自动收缩侧边栏
    screenWidth(val) {
      if (!this.timer) {
        this.screenWidth = val;
        this.timer = true;
        let setTimeID = setTimeout(() => {
          this.auto();
          this.timer = false;
          clearTimeout(setTimeID);
        }, 400);
      }
    }
  },
  //方法集合
  methods: {
    collapseChange(){
       this.collapse = !this.collapse;
       this.$bus.emit("collapse", this.collapse);
    },
    //根据窗口宽度自动收缩侧边栏
    auto(){
      if(this.screenWidth < 1200){
        this.collapse = true,
        this.$bus.emit("collapse",true)
      }else {
        this.collapse = false;
        this.$bus.emit("collapse", false);
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        this.screenWidth = window.screenWidth
      })()
    }
    //全剧注册collapse收缩侧边栏事件
    this.$bus.on("collapse", state => {
      this.collapse = state
    })
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
  
  },
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
