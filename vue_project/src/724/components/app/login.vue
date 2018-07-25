<template>
<el-container class="container">
<el-card class="box-card" shadow="hover">
    <h2>管理员登陆</h2>
    <el-form ref="form"  label-width="80px">
    <el-form-item label="用户名">
        <el-input placeholder="请输入管理员账号" ></el-input>
    </el-form-item>
    <el-form-item label="密码">
        <el-input placeholder="请输入登陆密码" ></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="primary" @click="reg">注册</el-button>
    </el-form-item>
    </el-form>
</el-card>
</el-container>
</template>

<script>
export default {
  data() {
    return { value: this.$route.params.username || "" };
  },
  methods: {
    login() {
      this.$router.push("/info");
    },
    reg() {
      this.$router.push("/reg");
    }
  }
};
</script>

<style>
.box-card {
  width: 400px;
  height: 400px;
  margin: 0 auto;
  opacity: .95;
}
h2 {
  text-align: center;
}
.container {
  background-image: url("../../../imgs/dc72c3c04ef01fdf-22176402958c6b80-19b50da29ec06c0e9e854ba3d2860da3.jpg");
  height: 800px;  
}
</style>


