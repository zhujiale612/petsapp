export default {
    //  namespaced: true,
    state: {
      curPage: 1,
      eachPage:3,
      maxPage: 0,
      count: 0,
      tableData5:[]
    },
    mutations: {
      deleteRow() {
      
      },
      getorders1(state,data){
        Object.assign(state,data)
        // console.log(state)
        
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
      async async_getuser({commit}) {
        //   console.log(this.state.usersManage.curPage)
        const data = await fetch(`/user/list?curPage=${this.state.usersManage.curPage}&eachPage=${this.state.usersManage.eachPage}`, {
          method: "get",
          headers: {
            "Contrnt-Type": "application"
          }
        }).then(res => res.json())  
        commit("getorders1",data)
      },
  
      //删除
      async async_delorder(context, row) {
          console.log(row)
        const data = await fetch(`/user/sets?id=${row._id}`, {
          method: "get",
          headers: {
            "Contrnt-Type": "application/json"
          }
        }).then(res => res.json())
        return data
      },
      //修改
      async async_change(context, row) {
        console.log(row)
        const data = await fetch("/user/set", {
            method: "post",
            body: JSON.stringify({
            row
            }),
            headers: {
              "Content-Type": "application/json"
            }
          }).then(res => res.json());
      
    },
    }
  }
  
  