<!--  -->
<template>
  <header>
    <div class="logo">
      <img src="../assets/logo.png" />
    </div>
    <div class="title">
      后台管理系统练习
    </div>
    <div class="login">
      <div class="header-user">
        <el-dropdown class="user-name" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            <span style="color:#fff">{{userName}}</span>
            <i class="el-icon-caret-bottom" style="color:#fff"></i>
          </span>
          <el-dropdown-menu slot="dropdown" class="personInfo">
            <el-dropdown-item command="loginout">
              <i class="fa fa-power-off" aria-hidden="true" />
              <span>退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      name: "admin",
    };
  },
  //监听属性 类似于data概念
  computed: {
    userName(){
      let username = sessionStorage.getItem("userName");
      return username || this.name
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleCommand(command){
      if(command === 'loginout'){
        sessionStorage.clear()
        // window.location.href = "http://www.baidu.com"
        this.$router.push('./')
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
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
<style scoped lang="scss">
header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
  background-color: #002140;
}
header .title {
  float: left;
  width: 350px;
  line-height: 70px;
  padding-left: 12px;
}
header .logo img {
  float: left;
  width: 60px;
  margin-top: 10px;
  margin-left: 20px;
}
.login {
  float: right;
  padding-right: 10px;
}
</style>
