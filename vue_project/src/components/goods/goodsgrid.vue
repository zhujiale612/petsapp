<template>
    <el-form ref="form" :model="form" label-width="130px">
        <el-form-item label="商品名称">
            <el-input placeholder="商品品牌名、推广标题" v-model="form.GName"></el-input>
        </el-form-item>
        <el-form-item label="商品品类">
            <el-input placeholder="狗粮、猫粮、猫砂、玩具等" v-model="form.variety"></el-input>
        </el-form-item>
        <el-form-item label="材质、制作方法">
            <el-input placeholder="材质（玩具等用品）、制作方法（粮食的烘培、膨化等）" v-model="form.material"></el-input>
        </el-form-item>
        <el-form-item label="适用规格">
            <el-input placeholder="适用幼犬、成犬、幼猫等" v-model="form.apply"></el-input>
        </el-form-item>
        <el-form-item label="专属规格">
            <el-input placeholder="贵宾专用、比熊专用等" v-model="form.special"></el-input>
        </el-form-item>
        <el-form-item label="包装规格">
            <el-input placeholder="1kg，5kg 等" v-model="form.packing"></el-input>
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
            <el-input placeholder="保质期设定会应景起效，如会员价" v-model="form.period"></el-input>
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
        <!-- <el-form-item label="商品图片">
           <template slot-scope="scope">
           <img :src='scope.row.gimgs[0]' style="width:100px"  />
          </template>
        </el-form-item> -->


    </el-form>
</template>

<script>
import { mapState } from "vuex";

export default {
  created() {
    this.$store.dispatch(
      "Goodstore/getGoodsDetail",
      this.$route.params.goodsId
    );

    for (let i = 0; i < this.rows.length; i++) {
      if (this.$route.params.goodsId === this.rows[i]._id) {
        this.form = this.rows[i];
      }
    }
    // console.log(this.rows);
  },
  computed: {
    ...mapState("Goodstore", ["rows"])
  },
  data() {
    return {
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
      }
    };
  },
  methods: {}
};
</script>

<style>
</style>
