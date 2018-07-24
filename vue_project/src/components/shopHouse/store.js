

export default {
    namespaced: true,
    state: {
        count: 0,
        eachPage: 5,
        maxPage: 0,
        nowPage: 1,
        rows: []
    },
    mutations: {
        houseInfo(state, data) {
            Object.assign(state, data);
        },
        setSelect(state, nowPage) {
            state.nowPage = nowPage
        },
        getValue(state, eachPage) {
            state.nowPage = 1;
            state.eachPage = eachPage
        }
    },
    actions: {
        //查询
        async getHouseByPage(context, type) {
            let data = await fetch(`/shopHouse/getHouseByPage`, {
                method: "post",
                body: JSON.stringify({
                    nowPage: this.state.shopHouse.nowPage,
                    eachPage: this.state.shopHouse.eachPage,
                    type
                }),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(res => res.json());
            // console.log(data)
            context.commit("houseInfo", data)
        },
        //添加
        async addShopHouse(context, { info, success }) {
            let data = await fetch(`/shopHouse/addShopHouse`, {
                method: "post",
                body: JSON.stringify(info),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(res => res.json());
            success.push(`/info/getShophouse`)
        },
        //修改
        async alterHouse(context, { info, success, id }) {
            let data = await fetch(`/shopHouse/alterHouse`, {
                method: "post",
                body: JSON.stringify({
                    info,
                    id
                }),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(res => res.json());
            success.push(`/info/getShophouse`)
        },
        //确定申请
        async isApply(context, { info, success, id }) {
            let data = await fetch(`/shopHouse/alterHouse`, {
                method: "post",
                body: JSON.stringify({
                    info,
                    id
                }),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(res => res.json());
            success.push(`/info/existHouse`)
        },
        //删除
        async del(context, { id, type }) {
            let data = await fetch(`/shopHouse/del`, {
                method: "post",
                body: JSON.stringify({
                    id: id,
                    type: type,
                    nowPage: this.state.shopHouse.nowPage,
                    eachPage: this.state.shopHouse.eachPage
                }),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(res => res.json());
            // console.log(data)
            context.commit("houseInfo", data)
        },
        //拒绝或同意或关闭
        async refuse(context, { id, info, type }) {
            let data = await fetch(`/shopHouse/refuse`, {
                method: "post",
                body: JSON.stringify({
                    id,
                    info,
                    type,
                    nowPage: this.state.shopHouse.nowPage,
                    eachPage: this.state.shopHouse.eachPage
                }),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(res => res.json());
            // console.log(data)
            context.commit("houseInfo", data)
        },
    }
}
