var express = require('express');
var router = express.Router();

const { addMember, getMemberPage,clearMember,determinepets,modifyPeople } = require("../service/memderService.js")
//增加
router.post('/addMember', async function (req, res, next) {

    res.send(await addMember(req.body))
});
//查询
router.get('/getMemberPage', async function (req, res, next) {
    res.send(await getMemberPage(req.query))
});
//删除
router.post('/clearMember', async function (req, res, next) {
    res.send(await clearMember(req.body))
});
//修改宠物
router.post('/determinepets', async function (req, res, next) {
    res.send(await determinepets(req.body))
});
//修改宠主
router.post('/modifyPeople', async function (req, res, next) {

    res.send(await modifyPeople(req.body))
});
module.exports = router;