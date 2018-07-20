<template>
<div>
    <table style="text-align:right;">
        <tr>
            <td><span>*</span>商店名称：</td>
            <td>
                <el-input v-model="shopName" placeholder="请输入内容"></el-input>
            </td>
        </tr>
        <tr>
            <td><span>*</span>营业执照号码：</td>
            <td>
                <el-input v-model="shopLicenceNum" placeholder="请输入内容"></el-input>
            </td>
        </tr>
        <tr>
            <td><span>*</span>营业地址：</td>
            <td>
                <el-input v-model="shopAdd" placeholder="请输入内容"></el-input>
            </td>
        </tr>
        <tr>
            <td><span>*</span>法人：</td>
            <td>
                <el-input v-model="shopCorporate" placeholder="请输入内容"></el-input>
            </td>
        </tr>
        <tr>
            <td><span>*</span>特色：</td>
            <td>
                <textarea class="textarea" v-model="shopFeature"></textarea>
            </td>
        </tr>
        <tr>
            <td><span>*</span>联系电话：</td>
            <td>
                <el-input v-model="shopTel" placeholder="请输入内容"></el-input>
            </td>
        </tr>
        <tr>
            <td><span>*</span>上传图片：</td>
            <td>
                <el-upload
                    class="upload-demo"
                    action=""
                    :on-remove="handleRemove"
                    list-type="picture"
                    :auto-upload="false"
                    :on-change="handleChange"
                    >
                    <el-button size="small" type="primary">点击上传</el-button>
                    <small slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</small>
                </el-upload>
            </td>
        </tr>
    </table>
    <el-row>
        <el-button type="success" @click="addBtn">确认添加</el-button>
    </el-row>
</div>
</template>

<script>
export default {
  data() {
    return {
      shopName: "",
      shopLicenceNum: "",
      shopAdd: "",
      shopCorporate: "",
      shopTel: "",
      shopFeature: ""
      
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handleChange(file, fileList) {
      console.log(file, fileList);
    },
    addBtn(){
        console.log(this)
    }
  }
};
</script>

<style>
.textarea {
  width: 300px;
  height: 100px;
  border-radius: 5px;
}
td > span {
  color: red;
}
</style>
