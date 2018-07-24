<template>
    <div>
        <el-table
            border
            :data="rows"
            style="width: 100%;text-align:center">
            <el-table-column
                prop="shopName"
                label="门店名称">
            </el-table-column>
            <el-table-column
                prop="shopLicenceNum"
                label="营业执照号码">
            </el-table-column>
            <el-table-column
                prop="shopAdd"
                label="营业地址">
            </el-table-column>
            <el-table-column
                prop="shopCorporate"
                label="法人">
            </el-table-column>
            <el-table-column
                prop="shopTel"
                label="联系电话">
            </el-table-column>
            <el-table-column
                prop="shopFeature"
                label="特色">
            </el-table-column>
            <el-table-column
                prop="shopImg"
                label="门店图片">
                <template slot-scope="scope">
                    <el-button
                        @click.native.prevent="lookImg(scope.row)"
                        type="text"
                        size="small">
                        查看
                    </el-button>
                </template>
            </el-table-column>
            <el-table-column
                prop="_id"
                label="状态">
                <template slot-scope="scope">
                    <el-button type="primary" :loading="true">审核中</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="nowPage"
                :page-sizes="[3, 5, 7, 9]"
                :page-size="eachPage"
                layout="total, sizes, prev, pager, next, jumper"
                :total="count">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapMutations } = createNamespacedHelpers("shopHouse");

export default {
  created() {
    this.$store.dispatch("shopHouse/getHouseByPage", 1);
  },
  computed: {
    ...mapState(["count", "eachPage", "maxPage", "nowPage", "rows"])
  },
  updated() {
    let localstroage = window.localStorage;
    let agoRows = JSON.parse(localstroage.getItem("agoRows"));
    if (agoRows.length > this.rows.length) {
      this.open();
    }
    localstroage.clear();
    localstroage.setItem("agoRows", JSON.stringify(this.rows));
  },
  methods: {
    ...mapMutations(["preBtn", "nextBtn", "setSelect", "getValue"]),
    handleSizeChange(val) {
      this.getValue(val);
    },
    handleCurrentChange(val) {
      this.setSelect(val);
    },
    apply(id) {
      this.$router.push(`/info/applyHouse/${id}`);
    },
    // alterRow(id) {
    // //   this.$router.push(`/info/alterHouse/${id}`);
    // },
    lookImg(img) {
      this.$router.push(`/info/lookImg/${img._id}`);
    },
    open() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
    }
  },
  watch: {
    nowPage() {
      this.$store.dispatch("shopHouse/getHouseByPage", 0);
    },
    eachPage() {
      this.$store.dispatch("shopHouse/getHouseByPage", 0);
    }
  }
};
</script>

<style>
.cell {
  text-align: center;
}
</style>
