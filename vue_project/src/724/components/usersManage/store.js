
export default {
    namespaced: true,
    state: {
        rows: []
    },
    mutations: {
        getuser(state, data) {
            Object.assign(state, data)
        }
    },
    actions: {
        async getuser(context) {
            const data = await fetch(`/users/getuser?curPage=${this.state.users}&eachPage=${this.state.users.eachPage}`, {
                method: "get",
                //    body: JSON.stringify({
                //        curPage:this.curPage,
                //        eachPage:this.eachPage
                //    }),
                headers: {
                    "Contrnt-Type": "application"
                }
            }
            ).then(res => res.json());
            //   console.log(data)
            context.commit('getuser', data);
        },
    }
}