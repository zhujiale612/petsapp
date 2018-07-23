<template>
 <el-container style="border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu router>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>O(∩_∩)O哈哈~</template>
        <el-menu-item-group>
          <!-- <el-menu-item index="/info/a">用户管理</el-menu-item>
          <el-menu-item index="/info">宠主管理</el-menu-item> -->
          <el-submenu index="2">
            <span slot="title">门店管理</span>
            <el-menu-item index="/info/addShopHouse">添加门店</el-menu-item>
            <el-menu-item index="/info/getShophouse">未使用门店</el-menu-item>
            <el-menu-item index="/info">选项1</el-menu-item>
          </el-submenu>
          <!-- <el-menu-item index="/info">商品管理</el-menu-item>
          <el-menu-item index="/info">服务管理</el-menu-item>
          <el-menu-item index="/info">订单管理</el-menu-item>
          <el-menu-item index="/info">宠物管理</el-menu-item> -->
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px;height:0px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
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
export default {};
</script>

<style>
</style>


