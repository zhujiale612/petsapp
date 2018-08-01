<template>
<div>
  <el-table
    :data="tableData5"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="prop">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="订单用户">
            <span>{{ prop.row.memberName }}</span>
          </el-form-item>
          <el-form-item label="所属店铺">
            <span>{{ prop.row.shopName }}</span>
          </el-form-item>
          <el-form-item label="订单 ID">
            <span>{{ prop.row._id }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ prop.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="用户地址">
            <span>{{ prop.row.memberAdd }}</span>
          </el-form-item>
          <el-form-item label="商品名">
            <span>{{ prop.row.goodsName }}</span>
          </el-form-item>
           <el-form-item label="服务名">
            <span>{{ prop.row.serviceName }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="订单 ID"
      prop="_id">
    </el-table-column>
     <el-table-column
      label="门店 ID"
      prop="shopId"
       :filters="a(tableData5)"
      :filter-method="filterShop"
      >
    </el-table-column>
     <el-table-column
      label="门店"
      prop="shopName">
    </el-table-column>
    <el-table-column
      label="订单用户"
      prop="memberName">
    </el-table-column>
    <el-table-column
      label="订单状态"
      prop="orderState"
       :filters="[{text: '未支付', value: '未支付'},{text: '已支付', value: '已支付'}]"
      :filter-method="filterState"
      >
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
  <template>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="curPage*1"
      :page-sizes="[1, 2, 3, 5]"
      :page-size="3"
      layout="total, sizes, prev, pager, next, jumper"
      :total="count">
    </el-pagination>
  </div>
</template>
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
        watch: {
    curPage() {
      this.$store.dispatch("async_getorder");
    },
    eachPage(){
        this.$store.dispatch("async_getorder");
    }
  },
  created(){
   this.$store.dispatch("async_getorder")
  //  this.$store.dispatch("async_addorder")
  },
    //   data() {
    //   return {
    //     currentPage1: 5,
    //     currentPage2: 5,
    //     currentPage3: 5,
    //     currentPage4: 4
    //   };
    // },
    //    data() {
    //   return {
    //     formLabelWidth: '120px',
    //     dialogFormVisible: false,
    //     form: {

    //     },
    //     orderType:["未支付","已支付","已完成","已评价"],
    //      tableData5: [{
    //       id: '12987122',
    //       name: '好滋好味鸡蛋仔',
    //       category: '江浙小吃、小吃零食',
    //       desc: '荷兰优质淡奶，奶香浓而不腻',
    //       address: '上海市普陀区真北路',
    //       shop: '王小虎夫妻店',
    //       shopId: '10333',
    //       orderState:"未支付"
          
    //     }, {
    //       id: '12987123',
    //       name: '好滋好味鸡蛋仔',
    //       category: '江浙小吃、小吃零食',
    //       desc: '荷兰优质淡奶，奶香浓而不腻',
    //       address: '上海市普陀区真北路',
    //       shop: '王小虎夫妻店',
    //       shopId: '10334',
    //        orderState:"未支付"
    //     }, {
    //       id: '12987125',
    //       name: '好滋好味鸡蛋仔',
    //       category: '江浙小吃、小吃零食',
    //       desc: '荷兰优质淡奶，奶香浓而不腻',
    //       address: '上海市普陀区真北路',
    //       shop: '王小虎夫妻店',
    //       shopId: '10333',
    //        orderState:"未支付"
    //     }, {
    //       id: '12987126',
    //       name: '好滋好味鸡蛋仔',
    //       category: '江浙小吃、小吃零食',
    //       desc: '荷兰优质淡奶，奶香浓而不腻',
    //       address: '上海市普陀区真北路',
    //       shop: '王小虎夫妻店',
    //       shopId: '10334',
    //        orderState:"已支付"
    //     }]
    //   }
    // },

    
    methods:{
       a(tableData5) {
       let arr=[]
       let resultarr=[]
          tableData5.map(item=>{
            arr.push(item.shopId)
          })
        let arr1 = [...new Set(arr)]; 
        arr1.map(item1=>{
          resultarr.push({
            text:item1,
            value:item1
          })
        })
        return resultarr
      },
     deleteRow(row){
      let i= this.$store.dispatch("async_delorder",row)
      if(i){
         this.$store.dispatch("async_getorder")
      }
    },
    add(){
      console.log("a")
      this.$store.dispatch("async_addorder")
      
    },
      filterShop(value, row, column){
        const property = column['property'];
        return row[property] === value;
      },
      filterState(value, row, column){
          const property = column['property'];
        return row[property] === value;
      },
       handleSizeChange(val) {
        this.$store.commit("handleSizeChange",val)
         
      },
      handleCurrentChange(val) {
        this.$store.commit("handleCurrentChange",val)
   
      }
     
    },
   
     computed: {
      tableData5(){
        return  this.$store.state.order.tableData5
      },
        curPage(){
        return  this.$store.state.order.curPage
      },
        eachPage(){
        return  this.$store.state.order.eachPage
      },
        maxPage(){
        return  this.$store.state.order.maxPage
      },
        count(){
        return  this.$store.state.order.count
      },
      // ...mapState( ["curPage", "eachPage", "maxPage","count"])
     
      }
}
</script>

