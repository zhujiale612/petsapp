<template>
<div>
  <el-table
    :data="tableData4"
    style="width: 100%">
    <el-table-column
      label="宠物名"
      prop="petname">
    </el-table-column>
     <el-table-column
      label="所属人"
      prop="petuser"
      >
    </el-table-column>
    <el-table-column
      label="宠物种类"
      prop="pettype">
    </el-table-column>
    <el-table-column
      label="图片"
      prop="image">
    </el-table-column>
      <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
           @click.native.prevent="deleteRow(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>


<style>
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

<script>
export default {
  created(){

  },
    
    methods:{
 deleteRow(row){
     console.log(row)
    //    this.$store.commit("deleteRow",row)
    }
    
    },
   
    computed: {
      tableData4(){
        return  this.$store.state.pet.tableData4
      },
     
      }
}
</script>

