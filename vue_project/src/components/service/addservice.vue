<template >
<div class="box">
    <el-card class="box-card">
        <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="服务名称">
                <el-input v-model="form.serviceName"></el-input>
            </el-form-item>
            <el-form-item label="服务类别">
                <el-input v-model="form.serviceType"></el-input>
            </el-form-item>
            <el-form-item label="排期">
                <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.serviceSchedule"  value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="适用规格">
                <el-select v-model="form.serviceCanFor" placeholder="请选择宠物体重">
                <el-option label="20" value="20"></el-option>
                <el-option label="40" value="40"></el-option>
                <el-option label="60" value="60"></el-option>
                <el-option label="80" value="80"></el-option>
                <el-option label="100" value="100"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="服务规格">
                <el-select v-model="form.serviceDetial" placeholder="请选择服务">
                <el-option label="普修" value="普修"></el-option>
                <el-option label="精修" value="精修"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="耗时">
                <el-input v-model="form.serviceTime"></el-input>
            </el-form-item>
            <el-form-item label="服务员等级">
                <el-select v-model="form.serviceLevel" placeholder="请选择服务员等级">
                <el-option label="普通" value="普通"></el-option>
                <el-option label="高级" value="高级"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="价格">
                <el-select v-model="form.servicePrice" placeholder="请选择价格">
                <el-option label="20" value="20"></el-option>
                <el-option label="50" value="50"></el-option>
                <el-option label="80" value="80"></el-option>
                <el-option label="100" value="100"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit(form)">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </el-card>
    </div>
</template>

<script>
export default {
    inject: ["reload"],
  data() {
    return {
      form: {
        serviceName: "",
        serviceType: "",
        serviceSchedule: "",
        serviceCanFor: "",
        serviceDetial: "",
        serviceTime: "",
        serviceLevel: "",
        servicePrice: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
     
    onSubmit(services) {
        this.$store.dispatch("Service/getservices",services),
         this.reload()
    }
  }
};
</script>

<style>
.box{
    width: 1010px;
    height: 600px;
    background-image: url("../../images/timg.jpg")
}
.box-card{
    width: 500px;

}
</style>
