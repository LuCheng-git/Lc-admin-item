<!--  -->
<template>
  <div id class>
    <div class="form-wrapper">
      <div class="title">
        <span class="title-span">后台管理系统</span>
      </div>
      <div class="ms-login">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="0px"
          class="ms-content"
        >
          <el-form-item prop="username">
            <el-input v-model="ruleForm.username" placeholder="username">
              <el-button slot="prepend" icon="fa fa-user-o"></el-button>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              placeholder="password"
              v-model="ruleForm.password"
              @keyup.enter.native="submitForm('ruleForm')"
            >
              <el-button slot="prepend" icon="fa fa-lock"></el-button>
            </el-input>
          </el-form-item>
          <div class="login-btn">
            <el-button type="primary" @click="submitForm('ruleForm')"
              >登录</el-button
            >
          </div>
          <p class="login-tips">Tips : 用户名和密码随便填。</p>
        </el-form>
      </div>
    </div>
    <div class="footer">
      <p>这是底部</p>
    </div>
  </div>
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
      ruleForm: {
        username: "administrator",
        password: "123123",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    submitForm(formName){
      this.$refs[formName].validate(vaild => {
        if(vaild) {
          sessionStorage.setItem("userName",this.ruleForm.username);
          this.$router.push("/menu1")
        }
      })
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
<style lang="scss" scoped>
.form-wrapper {
  width: 307px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* text-align: center; */
}
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  // background-image: url(../../../static/img/login4-bg.jpg);
  background-size: 100% 100%;
}
.title {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
}
.title-img {
  /* width: 278px;
  height: 55px; */
  width: 253px;
  height: 50px;
}
.title-span {
  width: 100%;
  font-size: 30px;
  color: #000;
  text-align: center;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* background-color: #333; */
  color: #409eff;
  text-align: center;
  font-size: 16px;
  height: 150px;
}
.footer span {
  line-height: 50px;
}
</style>
