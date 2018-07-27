<template>
    <div >
    <div class="search">
        <el-input class="search-input" v-model="input" placeholder="请输入搜索内容">
        </el-input><el-button icon="el-icon-search" circle  @click="getsearch()"></el-button>
        <el-radio-group v-model="radio" @change="Order()">
          <el-radio :label="0" border>默认排序</el-radio>
          <el-radio :label="1" border>价格排序</el-radio>
        </el-radio-group>
    </div>
    <h1>商品列表</h1>
    <el-table 
      border
      :data="rows"
      style="width:100%;text-align:center">
      <el-table-column
        prop="_id"
        label="商品编号"
        >
      </el-table-column>
      <el-table-column
        prop="GName"
        label="商品名称"
        >
      </el-table-column>
      <el-table-column
        prop="variety"
        label="商品品类">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格（元）">
      </el-table-column>
      <el-table-column  label="商品图片">
         <template slot-scope="scope">
           <img :src='scope.row.gimgs[scope.row.gimgs.length-1]' style="width:100px"  />
          </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          
          <el-button type="info" plain  @click="moreBtn(scope.row._id)" style="width:140px;margin-bottom:10px;display:block;margin-left:10px">商品详情</el-button>
        
          <el-button @click.native.prevent="deleteRow(scope.row._id)" type="danger"  plain>删除</el-button>
          <el-button type="success" @click="modifyform(scope.row)"  plain>修改</el-button>
          <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <el-form ref="form" :model="form" label-width="130px">
                <el-form-item label="商品名称">
                    <el-input placeholder="商品品牌名、推广标题" v-model="form.GName"></el-input>
                </el-form-item>
                <el-form-item label="商品品类">
                    <el-radio-group v-model="form.variety">
                      <el-radio label="狗粮"  ></el-radio>
                      <el-radio label="猫粮"  ></el-radio>
                      <el-radio label="猫砂"  ></el-radio>
                      <el-radio label="玩具"  ></el-radio>
                      <el-radio label="其它" ></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="材质、制作方法">
                    <el-input placeholder="材质（玩具等用品）、制作方法（粮食的烘培、膨化等）" v-model="form.material"></el-input>
                </el-form-item>
                <el-form-item label="适用规格">
                  <el-radio-group v-model="form.apply">
                    <el-radio label="幼犬" ></el-radio>
                    <el-radio label="成犬" ></el-radio>
                    <el-radio label="幼猫" ></el-radio>
                    <el-radio label="无" ></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="专属规格">
                  <el-radio-group v-model="form.special">
                    <el-radio label="贵宾专用" ></el-radio>
                    <el-radio label="比熊专用" ></el-radio>
                    <el-radio label="无" ></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="包装规格">
                  <el-radio-group v-model="form.packing">
                    <el-radio label="1kg"  ></el-radio>
                    <el-radio label="2kg"  ></el-radio>
                    <el-radio label="5kg"  ></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="口味">
                    <el-input placeholder="鸡肉味、牛肉味" v-model="form.taste"></el-input>
                </el-form-item>
                <el-form-item label="特殊功用">
                    <el-input placeholder="美毛、去泪痕" v-model="form.function"></el-input>
                </el-form-item>
                <el-form-item label="产地">
                    <el-input placeholder="国产 广州、加拿大、美国" v-model="form.place"></el-input>
                </el-form-item>

                <el-form-item label="出厂日期">
                    <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" value-format="yyyy-MM-dd"  v-model="form.date" style="width: 100%;">
                    </el-date-picker>
                    </el-col>
                </el-form-item>

                <el-form-item label="保质期">
                  <el-radio-group v-model="form.period">
                    <el-radio label="12个月" ></el-radio>
                    <el-radio label="二年" ></el-radio>
                    <el-radio label="三年" ></el-radio>
                  </el-radio-group>
                </el-form-item>

                <el-form-item label="供应商">
                    <el-input v-model="form.supplier"></el-input>
                </el-form-item>

                <el-form-item label="特色说明">
                    <el-input type="textarea" v-model="form.explain"></el-input>
                </el-form-item>

                <el-form-item label="价格">
                    <el-input placeholder="基准价格"  v-model="form.price"></el-input>
                </el-form-item>

                <el-form-item label="商品图片">
                    <el-upload
                        ref="upload"
                        class="upload-demo"
                        action="files/upload"
                        :on-success="handleImageScucess"
                        :on-remove="handleRemove"
                        :file-list="filelist"
                        list-type="picture">
                        <el-button size="small" type="primary" >更新图片</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">     
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="modifyGoods()">确 定</el-button>  
            </div>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="curPage"
        :page-sizes="[1, 5, 10, 15]"
        :page-size="eachPage"
        layout="total, sizes, prev, pager, next, jumper"
        :total="count">
    </el-pagination>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  created() {
    this.getGoods();
  },
  computed: {
    ...mapState("Goodstore", ["rows", "curPage", "eachPage", "count"])
  },
  watch: {
    curPage() {
      this.getGoods();
    },
    eachPage() {
      this.getGoods();
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      form: {
        GName: "",
        variety: "",
        material: "",
        apply: "",
        special: "",
        packing: "",
        taste: "",
        function: "",
        place: "",
        date: "",
        period: "",
        supplier: "",
        explain: "",
        price: "",
        gimgs: []
      },
      input: "",
      filelist: [],
      radio: 0,
      id: ""
    };
  },
  methods: {
    ...mapActions("Goodstore", ["getGoods"]),
    ...mapMutations("Goodstore", ["setCurpage", "setEachpage"]),

    deleteRow(id) {
      this.$store.dispatch("Goodstore/delGoods", id);
    },
    moreBtn(id) {
      console.log(id)
      this.$router.push(`/goodsgrid/${id}`);
    },
    handleSizeChange(val) {
      this.setEachpage(val);
    },
    handleCurrentChange(val) {
      this.setCurpage(val);
    },
    modifyGoods() {
      Object.assign(this.form, { _id: this.id });
      this.$store.dispatch("Goodstore/modifyGoods", this.form);
      this.dialogFormVisible = false;
    },
    getsearch() {
      this.$store.dispatch("Goodstore/getsearch", this.input);
    },
    Order() {
      switch (this.radio) {
        case 0: {
          this.$store.dispatch("Goodstore/getGoods");
          break;
        }
        case 1: {
          this.$store.dispatch("Goodstore/getGoodsTwo");
          break;
        }
        default: {
          console.log("in");
        }
      }
    },
    modifyform(info) {
      this.id = info._id;
      this.dialogFormVisible = true;
      this.form.GName = info.GName;
      this.form.variety = info.variety;
      this.form.material = info.material;
      this.form.apply = info.apply;
      this.form.special = info.special;
      this.form.packing = info.packing;
      this.form.taste = info.taste;
      this.form.function = info.function;
      this.form.place = info.place;
      this.form.date = info.date;
      this.form.period = info.period;
      this.form.supplier = info.supplier;
      this.form.explain = info.explain;
      this.form.price = info.price;
      this.form.gimgs = info.gimgs;
      this.filelist = info.gimgs.map(item => {
        return { url: item };
      });
    },
    handleImageScucess(response) {
      this.form.gimgs.push(response);
    },
    handleRemove(file) {
      const lengths = this.form.gimgs.length;
      for (let i = 0; i < lengths; i++) {
        if (file.url === this.form.gimgs[i]) {
          this.form.gimgs.splice(i, 1);
        }
      }
    }
  }
};
</script>

<style>
.cell {
  text-align: center;
}

.cell .el-button + .el-button {
  margin-left: 6px;
}
.search {
  width: 100%;
  margin-bottom: 30px;
}
.search .search-input {
  width: 300px;
}
.el-pagination {
  margin-top: 20px;
}
.search .el-button {
  margin-left: 15px;
}
h1 {
  color: gray;
}
.search .el-radio-group {
  margin-left: 450px;
}
.el-dialog__body {
  text-align: left;
}
</style>
