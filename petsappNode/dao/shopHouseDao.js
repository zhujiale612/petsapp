const mongoose = require("mongoose");



//查询
module.exports.getHouseByPage = async (nowPage, eachPage, type) => {
    let exp = mongoose.model("shopHouse");
    let count = await exp.count({
        type
    });
    let data = await exp
        .find({
            type
        })
        .sort({
            _id: -1
        })
        .skip((nowPage - 1) * eachPage)
        .limit(eachPage)
        .exec()
    return {
        nowPage,
        eachPage,
        count: count,
        maxPage: Math.ceil(count / eachPage),
        rows: data
    }
}


//增加
module.exports.addShopHouse = async (info) => {
    return await mongoose.model("shopHouse").create(info);
}
//删除
module.exports.del = async (id) => {
    return await mongoose.model("shopHouse").findByIdAndRemove(id.id);
    // console.log(id.id)
}
//修改
module.exports.alterHouse = async ({ info, id }) => {
    return await mongoose.model('shopHouse').update({ _id: id }, info)
}
//拒绝
module.exports.refuse = async ({ info, id }) => {
    return await mongoose.model('shopHouse').update({ _id: id }, info)
}