const {
    getorders,
    addorders,
    delorders,
    setorders
} = require("../dao/orderDao")

module.exports.getorders = async (curPage, eachPage) => {
    return await getorders(curPage, eachPage)
}

module.exports.addorders = async data => {
    return await addorders(data)
    // return await getImgsByPage(img)
}

module.exports.delorders = async _id => {
    return await delorders(_id)
}

module.exports.setorders = async (id,orderState) => {
    return await setorders(id,orderState)
}