<template>
<el-container style="height: 800px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']" router>
            <el-submenu index="0">
                <template slot="title"><i class="el-icon-menu"></i>平台管理员权限</template>
                <el-menu-item-group>
                    <el-menu-item index="/storeUsers">用户管理</el-menu-item>
                    <el-menu-item index="">门店管理</el-menu-item>
                    <el-menu-item index="">宠主管理</el-menu-item>
                    <el-menu-item index="">供应商管理</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="1" disabled>
                <template slot="title"><i class="el-icon-message"></i>门店管理员权限</template>
                <el-menu-item-group>
                    <el-menu-item index="">商品管理</el-menu-item>
                    <el-menu-item index="">服务管理</el-menu-item>
                    <el-menu-item index="">订单管理</el-menu-item>
                    <el-menu-item index="">宠物管理</el-menu-item>
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
    methods: {
        esc() {
            this.$router.push("/");
        }
    }
};
</script>

<style>

</style>
