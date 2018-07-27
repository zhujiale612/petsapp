const mongoose = require("mongoose")
module.exports.register = async (data) => {//注册包括判断是否已注册
    const {
        userAcount,//账号
        userPwd,//密码
        userPhone,//电话
        userName,//昵称
        userType,//角色
    } = data
    let isdata = "false";
    const datauser = await mongoose.model("users").find()
    for (let i = 0; i < datauser.length; i++) {
        if (userAcount == datauser[i].userAcount && userType == datauser[i].userType) {
            isdata = true;
            i = datauser.length + 1;
        } else {
            isdata = "false";
        }
    }
    if (isdata == "false") {
        return await mongoose.model("users")
            .create({
                userAcount: userAcount,//账号
                userPwd: userPwd,//密码
                userPhone: userPhone,//电话
                userName: userName,//昵称
                userType: userType,//角色
                userStatus: "不可用",//状态
            })
    } else {
        isdata = false;
    }
    return isdata;
}
module.exports.Land = async (data) => {//登陆
    const {
        userAcount,//账号
        userPwd,//密码
        userType//登陆类型
    } = data
    let isdata = "false";
    let my = "false";
    const datauser = await mongoose.model("users").find()
    for (let i = 0; i < datauser.length; i++) {
        if (userAcount == datauser[i].userAcount && userPwd == datauser[i].userPwd && userType == datauser[i].userType) {
            isdata = "true";
            my = datauser[i]
            i = datauser.length + 1;
        } else {
            isdata = "false";
        }
    }
    return my;
}
// console.log(data)
//获取用户列表
module.exports.list = async ({ curPage, eachPage }) => {
    let count = await mongoose.model("users").count();
    const tableData5 = await mongoose
        .model("users")
        .find()
        .sort({
            _id: -1
        })
        .skip((curPage - 1 / eachPage))
        .limit(eachPage)
        .exec()
    return {
        curPage,
        eachPage,
        count,
        maxPage: Math.ceil(count / eachPage),
        tableData5
    }
}
// let data = []
// if (myuser == "用户管理") {
//     let owe = await mongoose.model("users").find()//门店-平台
//     // let two = await mongoose.model("Spoilmanagement").find()//宠物
//     for (let i = 0; i < owe.length; i++) {
//         data.push(owe[i])
//     }
//     // for (let i = 0; i < two.length; i++) {
//     //     data.push(two[i])
//     // }
//     console.log(data)//得到所有用户列表
// } else if (myuser == "宠物用户") {
//     let two = await mongoose.model("Spoilmanagement").find()//宠物
//     for (let i = 0; i < two.length; i++) {
//         data.push(two[i])
//     }
//     console.log(data)//得到宠物用户列表
// } else if (myuser == "平台管理员") {
//     let owe = await mongoose.model("users").find()//门店-平台
//     for (let i = 0; i < owe.length; i++) {
//         if (owe[i].userType == "平台管理员") {
//             data.push(owe[i])
//         }
//     }
//     console.log(data)//得到平台用户列表
// } else {//平台用户
//     let owe = await mongoose.model("users").find()//门店-门店
//     for (let i = 0; i < owe.length; i++) {
//         if (owe[i].userType == "门店管理员") {
//             data.push(owe[i])
//         }
//     }
//     console.log(data)//得到门店用户列表
// }
// return data;
//删除
module.exports.sets = async (id) => {
    console.log(id)
    await mongoose.model("users").remove({
        _id: id.id
    })
    return true
}
module.exports.set = async (data) => {//修改用户信息
    const { name, phone, password, _id } = data.row

    await mongoose.model("users").find({
        _id: _id
    }).update({
        userAcount: name,//账号
        userPwd: password,//密码
        userPhone: phone,//电话
    })
    return true
}