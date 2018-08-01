<template>
<el-container style="height: 800px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1','2','3','4','5','6','7','8','9']" router>
            <el-submenu index="8" v-if="userType===0" >
                <template slot="title" ><i class="el-icon-menu"></i>平台管理员权限</template>
                <el-menu-item-group>
                    <el-menu-item index="/storeUsers">用户管理</el-menu-item>
                     <el-submenu index="7">
                        <template slot="title">门店管理</template>
                        <el-menu-item index="/info/addShopHouse">添加门店</el-menu-item>
                        <el-menu-item index="/info/getShophouse">未使用门店</el-menu-item>
                        <el-menu-item index="/info/auditing">审核门店</el-menu-item>
                        <el-menu-item index="/info/successApply">已审核门店</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="">供应商管理</el-menu-item>
                    <el-submenu index="9">
                        <template slot="title">宠主管理</template>
                        <el-menu-item index="/addmember">欢迎新主人</el-menu-item>
                        <el-menu-item index="/getmember">铲屎君列表</el-menu-item>
                    </el-submenu>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="1" v-else >
                <template slot="title"><i class="el-icon-message"></i>门店管理员权限</template>
                <el-menu-item-group>
                    <el-submenu index="4">
                        <template slot="title">商品管理</template>
                        <el-menu-item index="/addgoods">新增商品</el-menu-item>
                        <el-menu-item index="/goodslist">商品列表</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">服务管理</template>
                        <el-menu-item index="/addservice">添加服务</el-menu-item>
                        <el-menu-item index="/getservice">服务列表</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="/order">订单管理</el-menu-item>
                    <el-menu-item index="/pet">宠物管理</el-menu-item>
                    <el-submenu index="6">
                        <template slot="title">门店管理</template>
                        <el-menu-item index="/info/existHouse">申请门店</el-menu-item>
                        <el-menu-item index="/info/applying">审核中</el-menu-item>
                        <el-menu-item index="/info/haveHouse">拥有的门店</el-menu-item>
                    </el-submenu>
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
      userType: "",
      content: []
    };
  },
  async created() {
    let localstroage = window.localStorage;
    this.userType = localstroage.getItem("userType") * 1;
    let userId = localstroage.getItem("userId");
    await this.$store.dispatch("shopHouse/getSpeakByPage", { heId: userId });
    if (JSON.parse(localstroage.getItem("count")) * 1) {
      this.content = JSON.parse(localstroage.getItem("content"));
      this.open();
    }
  },
  methods: {
    esc() {
      this.$router.push("/");
    },
    open() {
      this.$alert(
        `失败理由：${this.content
          .map(item => {
            return `<P><${item.shopName}>失败因为：${item.content}</p>`;
          })
          .join("")}`,
        `${this.content.map(item => {
          return `${item.shopName}申请失败`;
        })}`,
        {
          dangerouslyUseHTMLString: true,
          confirmButtonText: "确定",
          callback: action => {
            let heId = this.content[0].heId;
            var localstroage = window.localStorage;
            localstroage.removeItem("count");
            localstroage.removeItem("content");
            this.$store.dispatch("shopHouse/delSpeak", { heId });
          }
        }
      );
    }
  }
};
</script>

<style>
</style>
