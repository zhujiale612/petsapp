<template>
<el-card class="box-card">
    <h1>登录页面</h1>
    <el-form ref="form"  label-width="80px">
    <el-form-item label="用户名">
        <el-input ></el-input>
    </el-form-item>
    <el-form-item label="密码">
        <el-input ></el-input>
    </el-form-item>
        <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="primary" @click="reg">注册</el-button>
    </el-form-item>
    </el-form>
</el-card>
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
    width: 480px;
  }
</style>


