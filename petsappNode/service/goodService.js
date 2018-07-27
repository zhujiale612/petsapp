const { saveGoods, getGoods, delGoods, modifyGoods, getGoodsDetail, getsearch, findSearch,getGoodsTwo } = require("../dao/goodsDao")

module.exports.saveGoods = async (obj) => {
    return await saveGoods(obj)
}
module.exports.getGoods = async (curPage, eachPage) => {
    return await getGoods(curPage, eachPage)
}
module.exports.getGoodsTwo = async (curPage, eachPage) => {
    return await getGoodsTwo(curPage, eachPage)
}
module.exports.delGoods = async (value) => {
    let data = await delGoods(value)
    if (data._id) {
        return await getGoods(value.curPage, value.eachPage)
    }
    // console.log(data)
}
module.exports.modifyGoods = async (value) => {
    let data = await modifyGoods(value)
    if (data.ok) {
        return await getGoods(value.curPage, value.eachPage)
    }
}
module.exports.getGoodsDetail = async (id) => {
    return await getGoodsDetail(id)
}
module.exports.getsearch = async (value) => {
    const data = await getsearch(value)
    let data1 = data.rows.map(item => {
        return item.id
    })
    if (data1.length != 0) {
        return await findSearch(value.curPage, value.eachPage, data1)
    }
    else{
        return false
    }
}