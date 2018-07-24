
let { addShopHouse, getHouseByPage, del, alterHouse, refuse } = require("../dao/shopHouseDao.js");


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

//拒绝
module.exports.refuse = async (info) => {
    let data = await refuse(info);
    console.log(data)
    if (data.ok) {
        return await getHouseByPage(info.nowPage, info.eachPage, info.type);
    }
}















// module.exports.getEmpsByPage = (nowPage, eachPage, cb) => {
//     getEmpsByPage(nowPage, eachPage, function(data) {
//         cb(data);
//     });
// }