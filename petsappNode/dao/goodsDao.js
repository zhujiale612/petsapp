const mongoose = require("mongoose")
const fs = require("fs")
module.exports.saveGoods = async (obj) => {
    // const {usersId,_id:goodsId}=await mongoose.model("goods").create(obj)

    // await mongoose.model("goods")
    //     .update({
    //       _id:usersId
    //     },{
    //       $push:{
    //         goods:goodsId
    //       }
    //     })
    return await mongoose.model("goods").create(obj)

}
module.exports.getGoods = async (curPage, eachPage) => {

    const goodsmodel = mongoose.model("goods")
    const count = await goodsmodel.count()

    const rows = await goodsmodel
        .find()
        .sort({
            _id: -1
           })
        .skip((curPage - 1) * eachPage)//跳过 从哪里开始
        .limit(Number(eachPage))//查询
        .exec()//执行
    return {
        curPage,
        eachPage,
        count,
        allPage: Math.ceil(count / eachPage),
        rows
    }
}
module.exports.getGoodsTwo = async (curPage, eachPage) => {

    const goodsmodel = mongoose.model("goods")
    const count = await goodsmodel.countDocuments()

    const rows = await goodsmodel
        .find()
        .sort({
            price: 1
           })
        .skip((curPage - 1) * eachPage)//跳过 从哪里开始
        .limit(Number(eachPage))//查询
        .exec()//执行
    return {
        curPage,
        eachPage,
        count,
        allPage: Math.ceil(count / eachPage),
        rows
    }
}
module.exports.delGoods = async (value) => {
    const data = await mongoose.model("goods").findByIdAndRemove(value._id)
    console.log(data)
    data.gimgs.forEach(async item => {
        let { unlink } = fs
        await unlink("public" + item)
    });
    return data
}

module.exports.modifyGoods = async (value) => {
    const { info } = value
    console.log(info)
    return await mongoose.model("goods").update({ _id: info._id }, info)
}
module.exports.getGoodsDetail = async (id) => {
    const data = await mongoose.model("goods").find(id)
    return data
}
module.exports.getsearch = async ({ start = 0, count = 10, GName }) => {

    const result = {
        start: ~~start,
        count: ~~count,
    }
    try {
        const goodsModel = mongoose.model("goods")
        result.total = await goodsModel.countDocuments({
            GName: {
                $regex: new RegExp(GName)
            }
        })
        result.rows = await
            goodsModel.find({
                GName: {
                    $regex: new RegExp(GName)
                }
            })
                .skip(result.start)
                .limit(result.count)
                .exec()
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve("")
            }, 2000)
        })
        return result
    } catch (e) {
        console.log('=============== getsearch 异常: =====================');
        console.log(e);
        console.log('====================================');
    }
}
module.exports.findSearch = async (curPage, eachPage, id) => {

    const goodsmodel = mongoose.model("goods")
    const count = await goodsmodel.countDocuments()
    const rows = await goodsmodel
        .find({ _id: { $in: id } })
        .sort({
            _id: -1
        })
        .skip((curPage - 1) * eachPage)//跳过 从哪里开始
        .limit(Number(eachPage))//查询
        .exec()//执行
    return {
        curPage,
        eachPage,
        count,
        allPage: Math.ceil(count / eachPage),
        rows
    }

}