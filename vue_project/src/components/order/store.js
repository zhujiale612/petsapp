export default {
  //  namespaced: true,
  state: {
    curPage: 1,
    eachPage:3,
    maxPage: 0,
    count: 0,
    tableData5:[
      {
              id: '12987122',
              memberName: '好滋好味鸡蛋仔',
              goodsName: '江浙小吃、小吃零食',
              serviceName: '荷兰优质淡奶',
              memberAdd: '上海市普陀区真北路',
              shopName: '王小虎夫妻店',
              shopId: '10333',
              orderState:"未支付"
              
            }, {
              id: '12987123',
              memberName: '好滋好味鸡蛋仔',
              goodsName: '江浙小吃、小吃零食',
              serviceName: '荷兰优质淡奶',
              memberAdd: '上海市普陀区真北路',
              shopName: '王小虎夫妻店',
              shopId: '10334',
              orderState:"已支付"
            },
    ]
  },
  mutations: {
    deleteRow() {
    
    },
    getorders1(state,data){
      // console.log("data")
      Object.assign(state,data)
    },
    handleSizeChange(state,val) {
      state.curPage=1
      state.eachPage=val
    },
    handleCurrentChange(state,val) {
     
      state.curPage=val
    },
  },
  actions: {
    //查询
    async async_getorder({commit}) {
      const data = await fetch(`/order/getorders?curPage=${this.state.order.curPage}&eachPage=${this.state.order.eachPage}`, {
        method: "get",
        headers: {
          "Content-Type": "application"
        }
      }).then(res => res.json())  
      commit("getorders1",data)
    },
    //添加
    async async_addorder(state) {
      const data = await fetch('/order/addorders',{
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify(
         state.state.tableData5
        ),
      }).then(res => res.json())
      return data
    },

    //删除
    async async_delorder(context, row) {
      const data = await fetch(`/order/delorders?id=${row._id}`, {
        method: "get",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json())
      return data
    },
    //修改支付状态
    async async_setorder(context,type) {
      const data = await fetch(`/order/setorders?orderState=${type.orderState}&id=${type.orderState}`, {
        method: "get",
        headers: {
          "Content-Type": "application"
        }
      }).then(res => res.json())
      return data
    },
  }
}

