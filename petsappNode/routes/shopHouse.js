
var express = require('express');
var router = express.Router();

let { addShopHouse, getHouseByPage, del, alterHouse, refuse, getStoreByPage, sendContent, getSpeakByPage, delSpeak, addUser, getUser } = require("../service/shopHouseService")



//查询
router.post('/getHouseByPage', async function (req, res, next) {
    const { nowPage, eachPage, type } = req.body
    res.send(await getHouseByPage(nowPage, eachPage, type))
});
//门店查询
router.post('/getStoreByPage', async function (req, res, next) {
    const { nowPage, eachPage, info } = req.body
    res.send(await getStoreByPage(nowPage, eachPage, info))
    // console.log(nowPage, eachPage, info)
});

//添加
router.post('/addShopHouse', async function (req, res, next) {
    //   const { nowPage, eachPage } = req.body
    res.send(await addShopHouse(req.body))
});
//删除
router.post('/del', async function (req, res, next) {
    res.send(await del(req.body))
});
//修改
router.post('/alterHouse', async function (req, res, next) {
    // console.log(req.body)
    res.send(await alterHouse(req.body))
});

//拒绝
router.post('/refuse', async function (req, res, next) {
    // console.log(req.body)
    res.send(await refuse(req.body))
});

//对话添加
router.post('/sendContent', async function (req, res, next) {
    // console.log(req.body)
    res.send(await sendContent(req.body))
});
//获取对话
router.post('/getSpeakByPage', async function (req, res, next) {
    // console.log(req.body)
    const { nowPage, eachPage, info } = req.body
    res.send(await getSpeakByPage(nowPage, eachPage, info))
});
//删除对话内容
router.post('/delSpeak', async function (req, res, next) {
    res.send(await delSpeak(req.body))
    // console.log(req.body)
});


//。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
//测试
router.post('/addUser', async function (req, res, next) {
    // console.log(req.body)
    res.send(await addUser(req.body))
});
//查询
router.post('/getUser', async function (req, res, next) {
    // console.log(req.body)
    res.send(await getUser(req.body))
});


module.exports = router;
