<template>
<el-card style="text-align:center;">
    <table style="text-align:right;margin:0 auto;">
        <tr>
            <td><span>*</span>商店名称：</td>
            <td>
                <el-input v-model="shopName" placeholder="请输入内容" ></el-input>
            </td>
        </tr>
        <tr>
            <td><span>*</span>营业地址：</td>
            <td>
                <el-input v-model="shopAdd" placeholder="请输入内容"></el-input>
            </td>
        </tr>
        <tr>
            <td><span>*</span>定位：</td>
            <td>
                <el-input v-model="position" placeholder="请输入内容"></el-input>
            </td>
        </tr>
        <tr>
            <td>
                <span>*</span>门店图片：</td>
            <td>
                <el-upload
                    class="upload-demo"
                    action="/files/upload"
                    :on-remove="handleRemove"
                    list-type="picture"
                    :auto-upload="true"
                    :on-success="handleSuccess"
                    >
                    <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
            </td>
        </tr>
    </table>
    <el-row>
        <el-button type="success" @click="addBtn">确认添加</el-button>
    </el-row>
</el-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapMutations } = createNamespacedHelpers("shopHouse");

export default {
  data() {
    return {
      shopName: "",
      shopLicenceNum: "亲~等你来哟",
      shopAdd: "",
      position: "",
      shopCorporate: "亲~等你来哟",
      shopTel: "亲~等你来哟",
      shopFeature: "亲~等你来哟",
      shopImg: [],
      userName: "木有人"
    };
  },
  methods: {
    handleRemove(file) {
      for (let i = 0; i < this.shopImg.length; i++) {
        if (this.shopImg[i] === file.response) {
          this.shopImg.splice(i, 1);
          return;
        }
      }
    },
    handleSuccess(response) {
      this.shopImg.push(response);
    },
    addBtn() {
      let localstroage = window.localStorage;
      let usersId = localstroage.getItem("userId");
      this.$store.dispatch("shopHouse/addShopHouse", {
        success: this.$router,
        info: {
          shopName: this.shopName,
          shopLicenceNum: this.shopLicenceNum,
          shopAdd: this.shopAdd,
          position: this.position,
          shopCorporate: this.shopCorporate,
          shopTel: this.shopTel,
          shopFeature: this.shopFeature,
          shopImg: this.shopImg,
          type: 0,
          userName: this.userName,
          usersId
        }
      });
    }
  }
};
</script>

<style>
.textarea {
  width: 300px;
  height: 100px;
  border-radius: 5px;
}
td > span {
  color: red;
}
</style>
