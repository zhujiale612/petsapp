// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

export default ({
  namespaced: true,
  strict: true,
  state: {
    curPage: 1,
    eachPage: 10,
    allPage: 0,
    count: 0,
    rows: [],
  },
  mutations: {
    getGoods(state, payload) {
      Object.assign(state, payload)
    },
    setCurpage(state, curPage) {
      state.curPage = curPage
    },
    setEachpage(state, eachPage) {
      state.eachPage = eachPage
    }
  },
  actions: {
    async saveGoods(context, { success, info }) {
      await fetch("/goodsRouter/saveGoods", {
        method: "post",
        body: JSON.stringify(info),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      success.push(`/goodslist`)
    },
    async getGoods({ state, commit }) {
      const data = await fetch("/goodsRouter/getGoods", {
        method: "post",
        body: JSON.stringify({
          curPage: state.curPage,
          eachPage: state.eachPage
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      commit('getGoods', data)
    },
    async getGoodsTwo({ state, commit }) {
      const data = await fetch("/goodsRouter/getGoodsTwo", {
        method: "post",
        body: JSON.stringify({
          curPage: state.curPage,
          eachPage: state.eachPage
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      commit('getGoods', data)
    },
    async delGoods({ state, commit }, id) {
      const data = await fetch("/goodsRouter/delGoods", {
        method: "post",
        body: JSON.stringify({
          curPage: state.curPage,
          eachPage: state.eachPage,
          _id: id
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      commit('getGoods', data)
    },
    async modifyGoods({ state, commit }, info) {
      const data = await fetch("/goodsRouter/modifyGoods", {
        method: "post",
        body: JSON.stringify({
          info: info,
          curPage: state.curPage,
          eachPage: state.eachPage,
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      commit('getGoods', data)
    },
    async getGoodsDetail({ state, commit }, id) {
      const data = await fetch("/goodsRouter/getGoodsDetail", {
        method: "post",
        body: JSON.stringify({
          _id: id
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      commit('getGoods', { rows: data })
    },
    async getsearch({ state, commit }, info) {
      const data = await fetch("/goodsRouter/getsearch", {
        method: "post",
        body: JSON.stringify({
          GName: info,
          start: 0,
          count: 100,
          curPage: state.curPage,
          eachPage: state.eachPage,
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      // console.log(data)
      if (data) {
        commit('getGoods', data)
      } else {
        commit('getGoods', {
          curPage: 1,
          eachPage: 10,
          allPage: 0,
          count: 0,
          rows: [],
        })
      }
    },
  },
})
