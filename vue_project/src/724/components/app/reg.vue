<template>
<el-container class="container">
    <el-card class="box-card" shadow="hover">
        <h2>门店管理员注册</h2>
        <el-form ref="form" label-width="80px">
            <el-form-item label="管理员名">
                <el-input type="text" ref="username" placeholder="请输入正确的管理员名" v-model="userName" clearable></el-input>
            </el-form-item>
            <el-form-item label="管理密码">
                <el-input type="password" placeholder="请输入注册密码" v-model="userPwd" clearable></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
                <el-input type="password" placeholder="请再次输入密码" v-model="userPwdAgin" clearable></el-input>
            </el-form-item>

            <el-form-item label="注册权限">
                <el-radio-group v-model="type">
                    <el-radio label="门店管理员"></el-radio>
                    <el-radio label="平台管理员" disabled></el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="register">注册</el-button>
                <el-button type="primary" @click="login">返回</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</el-container>
</template>

<script>
export default {
    data() {
        return {
            userName: "",
            userPwd: "",
            userPwdAgin: "",
            type: ""
        };
    },
    methods: {
        login() {
            this.$router.push(`/`);
            // console.log(this.$refs)
        },
        async register() {
            if (this.userName != "" && this.userPwd != "" && this.userPwdAgin != "" && this.type != "") {
                if (this.userPwd == this.userPwdAgin) {
                    const data = await fetch("/users/register", {
                        method: "post",
                        body: JSON.stringify({
                            userAcount: this.userName, //账号
                            userPwd: this.userPwd, //密码
                            userType:this.type,
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then(res => res.json());
                    // console.log(this.userName)
                    if (data == true) {
                        this.$alert("注册成功！", "提示", {
                            confirmButtonText: "确定",
                            callback: action => {
                                this.$router.push(
                                    `/${this.userName}/${this.userPwd}`
                                );
                            }
                        });
                    } else {
                        this.$alert("注册失败，账号已被注册", "警告", {
                            confirmButtonText: "确定"
                        });
                    }
                }
            }
        }
    }
};
</script>

<style>

</style>
