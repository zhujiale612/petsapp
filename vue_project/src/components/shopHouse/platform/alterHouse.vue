<template>
<div>
    <table style="text-align:right;">
        <tr>
            <td><span>*</span>商店名称：</td>
            <td>
                <el-input v-model="shopName" ></el-input>
            </td>
        </tr>
        <tr>
            <td><span>*</span>营业地址：</td>
            <td>
                <el-input v-model="shopAdd" ></el-input>
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
                    :file-list="fileList2"
                    >
                    <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
            </td>
        </tr>
    </table>
    <el-row>
        <el-button type="success" @click="yesBtn">确认修改</el-button>
        <el-button type="success" @click="noBtn">取消修改</el-button>
    </el-row>
</div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapMutations } = createNamespacedHelpers("shopHouse");

export default {
  created() {
    this.rows.some(item => {
      if (item._id === this.$route.params.houseId) {
        this.shopName = item.shopName;
        this.shopLicenceNum = item.shopLicenceNum;
        this.shopAdd = item.shopAdd;
        this.shopCorporate = item.shopCorporate;
        this.shopTel = item.shopTel;
        this.shopFeature = item.shopFeature;
        this.shopImg = item.shopImg;
        this.fileList2 = item.shopImg.map(item => {
          return { url: item };
        });
      }
    });
  },
  computed: {
    ...mapState(["rows"])
  },
  data() {
    return {
      shopName: "",
      shopLicenceNum: "",
      shopAdd: "",
      shopCorporate: "",
      shopTel: "",
      shopFeature: "",
      shopImg: [],
      fileList2: []
    };
  },
  methods: {
    handleRemove(file) {
      for (let i = 0; i < this.shopImg.length; i++) {
        if (this.shopImg[i] === file.url) {
          this.shopImg.splice(i, 1);
          return;
        }
      }
    },
    handleSuccess(response) {
      this.shopImg.push(response);
    },
    noBtn() {
      this.$router.push(`/info/getShophouse`);
    },
    yesBtn() {
      this.$store.dispatch("shopHouse/alterHouse", {
        success: this.$router,
        info: {
          shopName: this.shopName,
          shopLicenceNum: this.shopLicenceNum,
          shopAdd: this.shopAdd,
          shopCorporate: this.shopCorporate,
          shopTel: this.shopTel,
          shopFeature: this.shopFeature,
          shopImg: this.shopImg
        },
        id: this.$route.params.houseId
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
