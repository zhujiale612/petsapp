var express = require('express');
var router = express.Router();
let {
    getorders,
    addorders,
    delorders,
    setorders
} = require("../service/orderService");


router.get('/getorders', async function (req, res, next) {
    const { curPage, eachPage } = req.query
    res.send(await getorders(curPage, eachPage))
});

router.post('/addorders', function (req,res,next){
    console.log(req.body);
})


router.get('/delorders', async function (req, res, next) {
    res.send(await delorders(req.query))
});

router.get('/setorders', async function (req, res, next) {
    res.send(await setorders(req.query))
});





module.exports = router;