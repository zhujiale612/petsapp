var express = require('express');
var router = express.Router();

const { saveGoods,getGoods,delGoods,modifyGoods,getGoodsDetail,getsearch,getGoodsTwo} = require("../service/goodService")

router.post('/saveGoods', async function (req, res, next) {
    res.send(await saveGoods(req.body))

});
router.post('/getGoods', async function (req, res, next) {
    const {curPage,eachPage}=req.body
    res.send(await getGoods(curPage,eachPage))

});
router.post('/delGoods', async function (req, res, next) {
    const data=await delGoods(req.body)
    res.send(data)
});
router.post('/modifyGoods', async function (req, res, next) {  
   res.send(await modifyGoods(req.body))
});
router.post('/getGoodsDetail', async function (req, res, next) {   
    res.send(await getGoodsDetail(req.body))
});
router.post('/getsearch', async function (req, res, next) {  
    res.send(await getsearch(req.body))
});
router.post('/getGoodsTwo', async function (req, res, next) {
    console.log(req.body)
    const {curPage,eachPage}=req.body
    res.send(await getGoodsTwo(curPage,eachPage))

});

module.exports = router;