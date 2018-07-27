
let { addShopHouse, getHouseByPage, del, alterHouse, refuse, getStoreByPage, sendContent, getSpeakByPage, delSpeak, addUser, getUser } = require("../dao/shopHouseDao.js");


module.exports.getHouseByPage = async (nowPage, eachPage, type) => {
    return await getHouseByPage(nowPage, eachPage, type);
}
//门店查询
module.exports.getStoreByPage = async (nowPage, eachPage, info) => {
    return await getStoreByPage(nowPage, eachPage, info);
}

//增加
module.exports.addShopHouse = async (info) => {
    return await addShopHouse(info);
}
//修改
module.exports.alterHouse = async (info) => {
    let data = await alterHouse(info);
    if (data.ok) {
        return await getHouseByPage(info.nowPage, info.eachPage, info.type);
    }
}
//删除
module.exports.del = async (id) => {
    let data = await del(id);
    if (data._id) {
        return await getHouseByPage(id.nowPage, id.eachPage, id.type);
    }
}

//拒绝
module.exports.refuse = async (info) => {
    let data = await refuse(info);
    if (data.ok) {
        return await getHouseByPage(info.nowPage, info.eachPage, info.type);
    }
}

//添加对话
module.exports.sendContent = async (info) => {
    return await sendContent(info);
}
//获取对话
module.exports.getSpeakByPage = async (nowPage, eachPage, info) => {
    return await getSpeakByPage(nowPage, eachPage, info);
}
//删除对话
module.exports.delSpeak = async (id) => {
    return await delSpeak(id);
}



//。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
//测试
module.exports.addUser = async (info) => {
    return await addUser(info);
}
//查询
module.exports.getUser = async (info) => {
    return await getUser(info);
}












// module.exports.getEmpsByPage = (nowPage, eachPage, cb) => {
//     getEmpsByPage(nowPage, eachPage, function(data) {
//         cb(data);
//     });
// }