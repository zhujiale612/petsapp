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
            <td><span>*</span>营业执照号码：</td>
            <td>
                <el-input v-model="shopLicenceNum" ></el-input>
            </td>
        </tr>
        <tr>
            <td><span>*</span>营业地址：</td>
            <td>
                <el-input :disabled="true" v-model="shopAdd" ></el-input>
            </td>
        </tr>
        <tr>
            <td><span>*</span>法人：</td>
            <td>
                <el-input v-model="shopCorporate" ></el-input>
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
                <el-input v-model="shopTel" ></el-input>
            </td>
        </tr>
    </table>
    <el-row>
        <el-button type="success" @click="addBtn">确认申请</el-button>
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
        this.shopAdd = item.shopAdd;
        this.shopName = item.shopName;
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
      this.$store.dispatch("shopHouse/isApply", {
        success: this.$router,
        info: {
          shopName: this.shopName,
          shopLicenceNum: this.shopLicenceNum,
          shopAdd: this.shopAdd,
          shopCorporate: this.shopCorporate,
          shopTel: this.shopTel,
          shopFeature: this.shopFeature,
          shopImg: this.shopImg,
          type: 1
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
