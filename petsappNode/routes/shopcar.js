var express = require('express');
var router = express.Router();
let {
    getshopcar,
    addshopcar,
    delshopcar,
} = require("../service/shopcarService");


router.get('/getshopcar', async function (req, res, next) {
    const { curPage, eachPage } = req.query
    res.send(await getshopcar(curPage, eachPage))
});

router.post('/addshopcar',async function (req,res,next){
    res.send(await addshopcar(req.body))
})


router.get('/delshopcar', async function (req, res, next) {
    res.send(await delshopcar(req.query))
});







module.exports = router;