export default {
    inject:["reload"],
    namespaced: true,
    strict: true,
    state: {

    },
    mutations: {
    
    },
    actions: {
        //新增
        async addMember(commit, member) {
           await fetch(
                "/membersRouter/addMember",
                {
                    method: "post",
                    body: JSON.stringify(member),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            ).then(res => res.json())
        },
//删除
        async  clearMember(commit, id) {

            await fetch(
                "/membersRouter/clearMember",
                {
                    method: "post",
                    body: JSON.stringify({
                        _id: id
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            ).then(res => res.json())
        },
//修改宠物
        async determinepets(commit, info) {
            await fetch(
                 "/membersRouter/determinepets",
                 {
                     method: "post",
                     body: JSON.stringify(info),
                     headers: {
                         "Content-Type": "application/json"
                     }
                 }
             ).then(res => res.json())

         },
         //修改宠主
        async modifyPeople(commit, val) {
            await fetch(
                 "/membersRouter/modifyPeople",
                 {
                     method: "post",
                     body: JSON.stringify(val),
                     headers: {
                         "Content-Type": "application/json"
                     }
                 }
             ).then(res => res.json())
             
         },
    },
    getters:{

    }
}