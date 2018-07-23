<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>门店名称：{{imgName}}</span>
            <el-button @click="backBtn" style="float: right; padding: 3px 0" type="text">返回</el-button>
        </div>
        <div style="width:200px;border:1px solid pink;font-size:0px;border-radius:10px;padding:5px" v-for="(item,index) in imgArr" :key="item" class="text item">
          <div style="float:left;margin:0 50px 0 10px"><span style="font-size:50px">{{index}}</span></div>
          <img :src='item' style="width:100px" />
        </div>
    </el-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapMutations } = createNamespacedHelpers("shopHouse");

export default {
  created() {
    this.rows.some(item => {
      if (item._id === this.$route.params.imgId) {
        this.imgArr = item.shopImg;
        this.imgName = item.shopName;
        return true;
      }
    });
  },
  computed: {
    ...mapState(["rows"])
  },
  data() {
    return {
      imgArr: [],
      imgName: ""
    };
  },
  methods: {
    backBtn() {
      this.$router.push(`/info/getShophouse`);
    }
  }
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
