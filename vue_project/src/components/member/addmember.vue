<template>
<div class="cont">
    <div class="box">
    <el-card class="box-card">
<el-upload
  class="avatar-uploader"
  action="memberurl/upload"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon">上传头像</i>
</el-upload>
<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="真实姓名">
    <el-input v-model="form.memberName"></el-input>
  </el-form-item>
    <el-form-item label="昵称">
    <el-input v-model="form.memberAcount"></el-input>
    </el-form-item>
     <el-form-item label="电话号码">
    <el-input v-model="form.memberPhone"></el-input>
    </el-form-item>
     <el-form-item label="会员卡">
    <el-input v-model="form.memberCard"></el-input>
    </el-form-item>
     <el-form-item label="积分">
    <el-input v-model="form.memberPoint"></el-input>
    </el-form-item>
     <el-form-item label="地址">
    <el-input v-model="form.memberAdd"></el-input>
    </el-form-item>
 </el-form>
 </el-card></div>
 <div class="cat">
     <el-card class="box-card">

<!-- Form -->
<div>
  <p>已有爱宠：</p>
  <ol>
    <li :key="item.id" v-for="(item) in form.pets">{{item.petsName}}</li>
  </ol>
</div>
<el-button type="text" @click="dialogFormVisible = true">添加宠物</el-button>

<el-dialog title="收货地址" :visible.sync="dialogFormVisible">
  <el-form :model="form">
     <el-form-item label="宠物昵称">
    <el-input v-model="form.pets.petsName"></el-input>
    </el-form-item>
     <el-form-item label="宠物品类">
    <el-input v-model="form.pets.petsClass"></el-input>
    </el-form-item>
     <el-form-item label="宠物品种">
    <el-input v-model="form.pets.petsType"></el-input>
    </el-form-item>
     <el-form-item label="破蛋日">
     <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" value-format="yyyy-MM-dd" v-model="form.pets.petsBirth" style="width: 100%;"></el-date-picker>
    </el-col>
    </el-form-item>
     <el-form-item label="宠物性格">
    <el-input v-model="form.pets.petsNature"></el-input>
    </el-form-item>
  </el-form>
 <div slot="footer" class="dialog-footer">
    <el-button @click=" cancel()">取 消</el-button>
    <el-button type="primary" @click="bbbox()">确定添加</el-button>
  </div>
</el-dialog>

  <div class="btn">
     <el-button type="success" @click="memberReg(form)" plain>确定注册</el-button>
     <el-button type="success" @click=" cancell()" plain>取消注册</el-button>
 </div>
    
 </el-card>
 </div>
</div>

</template>

<script>
export default {
  inject: ["reload"],
  data() {
    return {
      dialogFormVisible: false,
      imageUrl: "",
      form: {
        memberName: "",
        memberAcount: "",
        memberPhone: "",
        memberCard: "",
        memberAdd: "",
        memberPoint: "",
        imageUrl: "",
        pets: []
      }
    };
  },
  methods: {
    //取消
    cancel() {
      this.dialogFormVisible = false;
    },
    cancell() {
      this.reload();
    },
    bbbox() {
      let obj = {
        petsName: this.form.pets.petsName,
        petsClass: this.form.pets.petsClass,
        petsType: this.form.pets.petsType,
        petsBirth: this.form.pets.petsBirth,
        petsNature: this.form.pets.petsNature
      };
      this.form.pets.push(obj);
      this.dialogFormVisible = false;
      (this.form.pets.petsName = ""),
        (this.form.pets.petsClass = ""),
        (this.form.pets.petsType = ""),
        (this.form.pets.petsBirth = ""),
        (this.form.pets.petsNature = "");
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.form.imageUrl = res;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    //发送数据
    memberReg(member) {
      this.$store.dispatch("Member/addMember", member);
      this.reload();
    }
  }
};
</script>

<style>
.cat {
  width: 500px;
}
.cont {
  display: flex;
  height: 490px;
  width: 1022px;
  background-image: url("../../images/47s58PICIGE_1024.jpg");
}
.box {
  width: 500px;
  margin-right: 20px;
}
.btn {
  margin-top: 60px;
  margin-left: 100px;
  margin-bottom: 60px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  margin-left: 80px;
  margin-bottom: 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 12px;
  color: #8c939d;
  width: 60px;
  height: 35px;
  padding-top: 25px;
  line-height: 60px;
  text-align: center;
}
.avatar {
  width: 60px;
  height: 60px;
  display: block;
}
</style>
