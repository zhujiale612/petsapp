<template >
<div>

  <el-table
    :data="member"
    style="width: 100%">
    <el-table-column type="expand" >
      <template slot-scope="props" >
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item  label="已有的宠物">
             <ol>
                <li :key="item.id" v-for="(item) in props.row.pets">
                  {{"宠物姓名："+item.petsName}}<br>
                  {{"宠物品类："+item.petsClass}}
                  <br>
                  {{"宠物品种"+item.petsType}}<br>
                  {{"破蛋日:"+item.petsBirth}}<br>
                  {{"宠物性格:"+item.petsNature}}<br>
          <el-button type="text" @click="dialogFormVisible = true" @click.native.prevent="modifPets(item)" >修改宠物</el-button>
                </li>
           </ol>
           <el-dialog title="修改" :visible.sync="dialogFormVisible">
             <span>宠物姓名： <el-input v-model="pets.petsName"></el-input></span>
             <span>宠物品类： <el-input v-model="pets.petsClass"></el-input></span>
             <span>宠物品种: <el-input v-model="pets.petsType"></el-input></span>
             <span>破蛋日:  <el-date-picker type="date" placeholder="选择日期" value-format="yyyy-MM-dd" v-model="pets.petsBirth" style="width: 100%;"></el-date-picker></span>
             <span>宠物性格: <el-input v-model="pets.petsNature"></el-input></span>
          <div slot="footer" class="dialog-footer">             
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="determine(props.row._id)">确 定 修 改</el-button>
          </div>
        </el-dialog>
          </el-form-item>

        </el-form>
      </template>



    </el-table-column>
     <el-table-column
      label="头像"
      width="95">
     <template slot-scope="scope">
    <img :src="scope.row.imageUrl" alt="头像" style="width:60px"> 
     </template>
    </el-table-column>
    <el-table-column
      prop="memberName"
      label="真实姓名"
      width="95">
    </el-table-column>
    <el-table-column
      prop="memberAcount"
      label="昵称"
      width="95">
    </el-table-column>
    <el-table-column
      prop="memberPhone"
      label="电话号码"
        width="150"
      >
    </el-table-column>
      <el-table-column
      prop="memberCard"
      label="会员卡"
        width="95">
    </el-table-column>
      <el-table-column
      prop="memberPoint"
      label="积分"
        width="95">
    </el-table-column>
      <el-table-column
      prop="memberAdd"
      label="地址"
        width="180">
    </el-table-column>
     <el-table-column
       prop="_id"
       label="操作"
        >


        
        <template slot-scope="scope">
           <el-button type="danger" icon="el-icon-delete"  @click.native.prevent="removerMember(scope.row._id)" circle></el-button>
             <el-button type="primary" icon="el-icon-edit"  @click="dialogFormVisible = true" @click.native.prevent="modif(scope.row)" circle></el-button>
             <!-- Form -->

<el-dialog title="修改" :visible.sync="dialogFormVisible">
  <el-form :model="form">
     <el-form-item label="头像">
       <div>
         <el-upload
          class="avatar-uploader"
          action="memberurl/upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon">修改头像</i>
        </el-upload>
       </div>
  </el-form-item>
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
  <div slot="footer" class="dialog-footer">
    <el-button @click="cancel()">取 消</el-button>
    <el-button type="primary" @click.native.prevent="userChange()">确 定 修 改</el-button>
  </div>
</el-dialog>
         </template>
         
    </el-table-column>
    
  </el-table>

  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="curPage"
      :page-sizes="[3, 4, 5, 6]"
      :page-size="eachPage"
      layout="sizes, prev, pager, next"
      :total="count">
    </el-pagination>
  </div>
</div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
createNamespacedHelpers("Member");
export default {
  inject: ["reload"],
  data() {
    return {
      dialogVisible : false,
      dialogFormVisible: false,
      formLabelWidth: "120px",
      eachPage: 10,
      curPage: 1,
      maxPage: 0,
      count: 0,
       pets: [{ 
        petsName: "o",
        petsClass:"o",
        petsType: "o",
        petsBirth: "o",
        petsNature:"o"}],
      form: {
        memberName: "",
        memberAcount: "",
        memberPhone: "",
        memberCard: "",
        memberAdd: "",
        memberPoint: "",
        imageUrl: "",
        _id: "",
      },
      member: []
    };
  },
  created() {
    this.getMemberPage();
  },
  watch: {
    curPage() {
      this.getMemberPage();
    },
    eachPage() {
      this.getMemberPage();
    }
  },
  methods: {
    //取消修改人
    cancel() {
      this.dialogFormVisible = false;
      this.reload();
    },

    //确定宠物修改
    determine(props) {
      const info = {
        peopleid: props,
        newdata: this.pets
      };
      this.$store.dispatch("Member/determinepets", info);
      this.dialogFormVisible = false;
      this.reload();
    },
    //宠物修改
    modifPets(item) {
      let petslObj = {
        petsName: item.petsName,
        petsClass: item.petsClass,
        petsType: item.petsType,
        petsBirth: item.petsBirth,
        petsNature: item.petsNature,
        _id: item._id
      };
      this.pets = petslObj;
    },
    //修改用户
    userChange() {
      let val = {
        form: this.form,
        eachPage: this.eachPage,
        curPage: this.curPage
      };
      this.$store.dispatch("Member/modifyPeople", val);
      this.dialogFormVisible = false;
      this.reload();
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
    //点击修改
    modif(row) {
      let modelObj = {
        memberName: row.memberName,
        memberAcount: row.memberAcount,
        memberPhone: row.memberPhone,
        memberCard: row.memberCard,
        memberAdd: row.memberAdd,
        memberPoint: row.memberPoint,
        imageUrl: row.imageUrl,
        _id: row._id
      };
      this.form = modelObj;
    },
    // 查询
    async getMemberPage() {
      const data = await fetch(
        `/membersRouter/getMemberPage?&curPage=${this.curPage}&eachPage=${
          this.eachPage
        }`,
        {
          method: "get",
          headers: {
            "Content-Type": "application"
          }
        }
      ).then(res => res.json());
      // console.log(data)
      Object.assign(this, data);
    },
    // 分页
    handleSizeChange(val) {
      this.curPage = 1;
      this.eachPage = val;
    },
    handleCurrentChange(val) {
      this.curPage = val;
    },

    removerMember(id) {
      this.$store.dispatch("Member/clearMember", id);
      this.reload();
    }
  }
};
</script>

<style>
.block {
  margin-left: 150px;
  margin-top: 20px;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
