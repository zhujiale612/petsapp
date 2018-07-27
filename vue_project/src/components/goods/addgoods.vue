<template class="bgimg" >

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
                <el-radio label="其它"  ></el-radio>
            </el-radio-group>
            <!-- <el-input placeholder="狗粮、猫粮、猫砂、玩具等" v-model="form.variety"></el-input> -->
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
                <el-radio label="1kg" ></el-radio>
                <el-radio label="2kg" ></el-radio>
                <el-radio label="5kg" ></el-radio>
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
                <el-radio label="一年" ></el-radio>
                <el-radio label="二年" ></el-radio>
            </el-radio-group>
        </el-form-item>

        <el-form-item label="供应商">
            <el-input v-model="form.supplier"></el-input>
        </el-form-item>

        <el-form-item label="特色说明">
            <el-input type="textarea" v-model="form.explain"></el-input>
        </el-form-item>

        <el-form-item label="价格（元）">
            <el-input placeholder="基准价格"  v-model="form.price"></el-input>
        </el-form-item>

        <el-form-item label="商品图片">
            <el-upload
                ref="upload"
                class="upload-demo"
                action="files/upload"
                :on-success="handleImageScucess"
                list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSave(form)">保存商品</el-button>
        </el-form-item>
    </el-form>

</template>

<script>
// import { mapActions } from "vuex";

export default {
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
        supplier:"",
        explain: "",
        price: "",
        gimgs:[]
      },

    };
  },
  methods: {
    //   //点击×会显示图片的对象数组
    //   handleRemove(file, fileList) {
    //     console.log(file, fileList,'handleRemove');
    //   },
    //   //点击上传的图片对象
    //   handlePreview(file) {
    //     console.log(file,'handlePreview');
    //   },
    //上传函数
    handleImageScucess(response) {
      this.form.gimgs.push(response);
    },
    //保存商品
    onSave(obj) {
      //调用保存商品函数
      // this.$refs.imgs.disabled=false
      this.$store.dispatch("Goodstore/saveGoods", {success:this.$router,info:obj});
    }
  }
};
</script>

<style>


</style>
