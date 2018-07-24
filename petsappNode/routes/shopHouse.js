
var express = require('express');
var router = express.Router();

let { addShopHouse, getHouseByPage, del, alterHouse, refuse } = require("../service/shopHouseService")



//查询
router.post('/getHouseByPage', async function (req, res, next) {
    const { nowPage, eachPage, type } = req.body
    res.send(await getHouseByPage(nowPage, eachPage, type))
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


module.exports = router;
