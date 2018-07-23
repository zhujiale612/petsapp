<template>
<div>
    <table style="text-align:right;">
        <tr>
            <td><span>*</span>商店名称：</td>
            <td>
                <el-input v-model="shopName" placeholder="请输入内容"></el-input>
            </td>
        </tr>
        <tr>
            <td><span>*</span>营业执照号码：</td>
            <td>
                <el-input v-model="shopLicenceNum" placeholder="请输入内容"></el-input>
            </td>
        </tr>
        <tr>
            <td><span>*</span>营业地址：</td>
            <td>
                <el-input v-model="shopAdd" placeholder="请输入内容"></el-input>
            </td>
        </tr>
        <tr>
            <td><span>*</span>法人：</td>
            <td>
                <el-input v-model="shopCorporate" placeholder="请输入内容"></el-input>
            </td>
        </tr>
        <tr>
            <td><span>*</span>特色：</td>
            <td>
                <textarea class="textarea" v-model="shopFeature"></textarea>
            </td>
        </tr>
        <tr>
            <td><span>*</span>联系电话：</td>
            <td>
                <el-input v-model="shopTel" placeholder="请输入内容"></el-input>
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
</div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapMutations } = createNamespacedHelpers("shopHouse");

export default {
  data() {
    return {
      shopName: "",
      shopLicenceNum: "",
      shopAdd: "",
      shopCorporate: "",
      shopTel: "",
      shopFeature: "",
      shopImg: []
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
        this.$store.dispatch("shopHouse/addShopHouse", {
          success: this.$router,
          info: {
            shopName: this.shopName,
            shopLicenceNum: this.shopLicenceNum,
            shopAdd: this.shopAdd,
            shopCorporate: this.shopCorporate,
            shopTel: this.shopTel,
            shopFeature: this.shopFeature,
            shopImg: this.shopImg,
            type: 0
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
