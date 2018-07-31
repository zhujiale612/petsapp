<template>
    <div>
        <el-table
            border
            :data="rows"
            style="width: 100%;text-align:center">
            <el-table-column
                prop="userName"
                label="申请人">
            </el-table-column>
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
                prop="position"
                label="定位">
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
                label="操作">
                <template slot-scope="scope">
                    <el-button size="small" type="text" @click="rejectBtn(scope.row._id)">拒绝</el-button>
                    <el-dialog title="拒绝理由" :visible.sync="dialogFormVisible">
                        <el-form :model="form">
                            <el-form-item label="QAQ" :label-width="formLabelWidth">
                                <el-input v-model="form.name" auto-complete="off"></el-input>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="refuseBtn(scope.row)">确 定</el-button>
                        </div>
                    </el-dialog>
                    <el-button
                        style="margin-left:10px"
                        @click.native.prevent="agreeBtn(scope.row)"
                        type="text"
                        size="small">
                        同意
                    </el-button>
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
  data() {
    return {
      dialogFormVisible: false,
      id: "",
      form: {
        name: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    ...mapMutations(["preBtn", "nextBtn", "setSelect", "getValue"]),
    handleSizeChange(val) {
      this.getValue(val);
    },
    handleCurrentChange(val) {
      this.setSelect(val);
    },
    rejectBtn(id) {
      this.id = id;
      this.dialogFormVisible = true;
    },
    lookImg(img) {
      this.$router.push(`/info/lookImg/${img._id}`);
    },
    refuseBtn(info) {
      this.rows.some(item => {
        if (item._id === this.id) {
          this.$store.dispatch("shopHouse/sendContent", {
            heId: item.usersId,
            shopName: item.shopName,
            content: this.form.name
          });
          this.$store.dispatch("shopHouse/refuse", {
            info: {
              shopName: "亲~等你来哟",
              shopLicenceNum: "亲~等你来哟",
              shopCorporate: "亲~等你来哟",
              shopTel: "亲~等你来哟",
              shopFeature: "亲~等你来哟",
              shopImg: [],
              type: 0,
              userName: "木有人"
            },
            id: item._id,
            type: 1
          });
          this.dialogFormVisible = false;
        }
      });
    },
    agreeBtn(info) {
      this.$store.dispatch("shopHouse/refuse", {
        info: {
          type: 2,
          usersId: info.usersId
        },
        id: info._id,
        type: 1
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
.el-form .el-form-item__label {
  text-align: center;
}
</style>
