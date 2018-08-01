const {
    getshopcar,
    addshopcar,
    delshopcar,
} = require("../dao/shopcarDao")

module.exports.getshopcar = async (curPage, eachPage) => {
    return await getshopcar(curPage, eachPage)
}

module.exports.addshopcar = async data => {
    return await addshopcar(data)
}

module.exports.delshopcar = async _id => {
    return await delshopcar(_id)
}

