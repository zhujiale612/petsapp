// -----------后台管理人员和门店用户----------//
var express = require('express');
var router = express.Router();

const { register, Land, list, sets, set } = require("../service/userService")
// -------注册包括判断是否已注册--------//
router.post('/register', async function (req, res, next) {
    res.send(await register(req.body))
});
//------登陆---// 
router.post('/Land', async function (req, res, next) {
    res.send(await Land(req.body))
});
//------用户列表---// 
router.get('/list', async function (req, res, next) {
    res.send(await list(req.query))
});
//------删除用户平台和门店---// 
router.get('/sets', async function (req, res, next) {
    res.send(await sets(req.query))
});
//----修改--//
router.post('/set', async function (req, res, next) {
    res.send(await set(req.body))
});
module.exports = router;