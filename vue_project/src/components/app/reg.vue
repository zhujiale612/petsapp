<template>
    <el-card class="box-card">
    <h1>注册页面</h1>
    账号：
    <el-input
    type="text"
    
    ref="username"
        placeholder="请输入内容"
        clearable>
    </el-input>
    密码：
     <el-input
        placeholder="请输入内容"
        clearable>
    </el-input>
     <el-button type="primary" @click="login">登录</el-button>
</el-card>
     
</template>

<script>
export default {
    methods:{
        login(){
            this.$router.push(`/login/${this.$refs.username.value}`)
            // console.log(this.$refs)
      
        }
    }
} 
</script>

<style>

</style>


