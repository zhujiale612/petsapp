
let { addShopHouse, getHouseByPage, del, alterHouse } = require("../dao/shopHouseDao.js");


module.exports.getHouseByPage = async (nowPage, eachPage, type) => {
    return await getHouseByPage(nowPage, eachPage, type);
}

//增加
module.exports.addShopHouse = async (info) => {
    return await addShopHouse(info);
}
//修改
module.exports.alterHouse = async (info) => {
    return await alterHouse(info);
}
//删除
module.exports.del = async (id) => {
    console.log(id)
    let data = await del(id);
    if (data._id) {
        return await getHouseByPage(id.nowPage, id.eachPage, id.type);
    }
}















// module.exports.getEmpsByPage = (nowPage, eachPage, cb) => {
//     getEmpsByPage(nowPage, eachPage, function(data) {
//         cb(data);
//     });
// }