
const mongoose = require("mongoose");
let fs = require("fs")


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
//门店查询
module.exports.getStoreByPage = async (nowPage, eachPage, info) => {
    let exp = mongoose.model("shopHouse");
    let count = await exp.count(info);
    let data = await exp
        .find(info)
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
    let data = await mongoose.model("shopHouse").findByIdAndRemove(id.id);
    data.shopImg.forEach(async item => {
        let { unlink } = fs
        await unlink("public" + item)
    })
    return data
    // console.log(id.id)
}
//修改
module.exports.alterHouse = async ({ info, id }) => {
    // console.log(info)
    return await mongoose.model('shopHouse').update({ _id: id }, info)
}
//拒绝
module.exports.refuse = async ({ info, id }) => {
    let data = await mongoose.model('shopHouse').update({ _id: id }, info)
    if (info.type == 2) {
        await mongoose.model('users')
            .update({
                _id: info.usersId
            }, {
                $push: {
                    shopHouse: id
                }
            })
    }
    if (info.type == 0) {
        let data = await mongoose.model('users').findOne({ _id: info.usersId })
        for (let i = 0; i < data.shopHouse.length; i++) {
            if (data.shopHouse[i] == id) {
                data.shopHouse.splice(i, 1)
            }
        }
        await mongoose.model('users').update({ _id: info.usersId }, data)
    }
    return data
}


//增加对话
module.exports.sendContent = async (info) => {
    // console.log(info)
    return await mongoose.model("speak").create(info);
}

//获取对话
module.exports.getSpeakByPage = async (nowPage, eachPage, info) => {
    // console.log(nowPage, eachPage, info)
    let exp = mongoose.model("speak");
    let count = await exp.count(info);
    let data = await exp
        .find(info)
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
//删除对话
module.exports.delSpeak = async (id) => {
    // console.log(id)
    return await mongoose.model("speak").remove(id);
}


//。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
//测试
module.exports.addUser = async (info) => {
    // console.log(info)
    return await mongoose.model("user").create(info);
}
//查询
module.exports.getUser = async (info) => {
    let data = await mongoose.model("user").findOne(info);
    return data
    // console.log(data)
}