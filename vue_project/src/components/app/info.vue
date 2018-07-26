<template>
<el-container style="height: 800px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']" router>
            <el-submenu index="0" :style="{display:display}">
                <template slot="title"><i class="el-icon-menu"></i>平台管理员权限</template>
                <el-menu-item-group>
                    <el-menu-item index="/storeUsers">用户管理</el-menu-item>
                    <el-menu-item index="">门店管理</el-menu-item>
                    <el-menu-item index="">供应商管理</el-menu-item>
                    <el-submenu index="">
                    <template slot="title">宠主管理</template>
                    <el-menu-item index="/addmember">欢迎新主人</el-menu-item>
                    <el-menu-item index="/getmember">铲屎君列表</el-menu-item>
                    </el-submenu>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="1" :style="{display:display1}">
                <template slot="title"><i class="el-icon-message"></i>门店管理员权限</template>
                <el-menu-item-group>
                    <el-menu-item index="">商品管理</el-menu-item>
                   <el-submenu index="">
                    <template slot="title">服务管理</template>
                    <el-menu-item index="/门店管理员/addservice">添加服务</el-menu-item>
                    <el-menu-item index="/门店管理员/getservice">服务列表</el-menu-item>
                  </el-submenu>
                    <el-menu-item index="/order">订单管理</el-menu-item>
                    <el-menu-item index="/pet">宠物管理</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

        </el-menu>
    </el-aside>

    <el-container>
        <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
                <i class="el-icon-setting"></i>
                <el-dropdown-menu slot="dropdown">
                    <el-button @click="esc" style="border:none">退出登陆</el-button>
                </el-dropdown-menu>
            </el-dropdown>
        </el-header>

        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</el-container>
</template>

<script>
export default {
    data() {
        return {
            display1: "block",
            display:"block"
        }

    },
    created() {
        // console.log(this.$router.currentRoute.params.userType)
        // console.log(this.$router.currentRoute)
        if (this.$router.currentRoute.params.userType === "门店管理员") {
            this.display = "none"
        } else if(this.$router.currentRoute.name === "order"){
             this.display = "none"
        }
        else if(this.$router.currentRoute.name === "pet"){
             this.display = "none"
        }
        else{
             this.display1= "none"
        }
    },
    methods: {
        esc() {
            this.$router.push("/");
        }

    }
};
</script>

<style>

</style>
