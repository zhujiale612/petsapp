<template>
    <div>
        <el-table
            border
            :data="rows"
            style="width: 100%;text-align:center">
            <el-table-column
                prop="userName"
                label="店长">
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
                    <el-button
                        @click.native.prevent="deleteRow(scope.row._id)"
                        type="text"
                        size="small">
                        移除
                    </el-button>
                    <el-button type="text" @click.native.prevent="openModify(scope.row._id)">修改</el-button>
                    <el-dialog title="修改" :visible.sync="dialogFormVisible" >
                        <el-form :model="form">
                            <el-form-item label="商店名称：" :label-width="formLabelWidth">
                                <el-input v-model="form.shopName" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="营业地址：" :label-width="formLabelWidth">
                                <el-input v-model="form.shopAdd" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="更新图片：" :label-width="formLabelWidth">
                                <el-upload
                                    class="upload-demo"
                                    action="/files/upload"
                                    :on-remove="handleRemove"
                                    list-type="picture"
                                    :auto-upload="true"
                                    :on-success="handleSuccess"
                                    :file-list="fileList"
                                    >
                                    <el-button size="small" type="primary">点击上传</el-button>
                                </el-upload>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click.native.prevent="agreeModify()">确 定</el-button>
                        </div>
                    </el-dialog>
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
    this.$store.dispatch("shopHouse/getHouseByPage", 0);
  },
  computed: {
    ...mapState(["count", "eachPage", "maxPage", "nowPage", "rows"])
  },
  data() {
    return {
      id: "",
      dialogFormVisible: false,
      form: {
        shopName: "",
        shopAdd: "",
        shopImg: []
      },
      formLabelWidth: "120px",
      fileList: []
    };
  },
  methods: {
    ...mapMutations(["preBtn", "nextBtn", "setSelect", "getValue"]),
    handleRemove(file) {
      for (let i = 0; i < this.form.shopImg.length; i++) {
        if (this.form.shopImg[i] === file.url) {
          this.form.shopImg.splice(i, 1);
          return;
        }
      }
    },
    handleSuccess(response) {
      this.form.shopImg.push(response);
    },
    openModify(id) {
      this.dialogFormVisible = true;
      this.rows.some(item => {
        if (item._id === id) {
          this.id = id;
          this.form.shopName = item.shopName;
          this.form.shopAdd = item.shopAdd;
          this.form.shopImg = item.shopImg;
          this.fileList = item.shopImg.map(item => {
            return { url: item };
          });
          return true;
        }
      });
    },
    agreeModify() {
      this.$store.dispatch("shopHouse/alterHouse", {
        info: {
          shopName: this.form.shopName,
          shopAdd: this.form.shopAdd,
          shopImg: this.form.shopImg
        },
        id: this.id,
        type: 0
      });
      this.dialogFormVisible = false;
    },
    handleSizeChange(val) {
      this.getValue(val);
    },
    handleCurrentChange(val) {
      this.setSelect(val);
    },
    deleteRow(id) {
      //   rows.splice(index, 1);
      this.$store.dispatch("shopHouse/del", { id, type: 0 });
    },
    alterRow(id) {
      this.$router.push(`/info/alterHouse/${id}`);
    },
    lookImg(img) {
      this.$router.push(`/info/lookImg/${img._id}`);
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
