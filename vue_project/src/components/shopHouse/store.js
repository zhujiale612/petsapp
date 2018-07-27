

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
        //门店查询
        async getStoreByPage(context, info) {
            let data = await fetch(`/shopHouse/getStoreByPage`, {
                method: "post",
                body: JSON.stringify({
                    nowPage: this.state.shopHouse.nowPage,
                    eachPage: this.state.shopHouse.eachPage,
                    info: info
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
        async alterHouse(context, { info, id, type }) {
            let data = await fetch(`/shopHouse/alterHouse`, {
                method: "post",
                body: JSON.stringify({
                    info,
                    id,
                    type,
                    nowPage: this.state.shopHouse.nowPage,
                    eachPage: this.state.shopHouse.eachPage
                }),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(res => res.json());
            context.commit("houseInfo", data)
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
        //发送对话内容
        async sendContent(context, info) {
            let data = await fetch(`/shopHouse/sendContent`, {
                method: "post",
                body: JSON.stringify(info),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(res => res.json());
        },
        //对话查询
        async getSpeakByPage(context, info) {
            let data = await fetch(`/shopHouse/getSpeakByPage`, {
                method: "post",
                body: JSON.stringify({
                    info,
                    nowPage: this.state.shopHouse.nowPage,
                    eachPage: this.state.shopHouse.eachPage,
                }),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(res => res.json());
            let localstroage = window.localStorage;
            localstroage.setItem("count", data.count);
            localstroage.setItem("content", JSON.stringify(data.rows));
        },
        //删除对话内容
        async delSpeak(context, id) {
            let data = await fetch(`/shopHouse/delSpeak`, {
                method: "post",
                body: JSON.stringify(id),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(res => res.json());
        },
    }
}
