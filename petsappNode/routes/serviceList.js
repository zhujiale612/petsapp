
var express = require('express');
var router = express.Router();
let { getservices,getServicesByPage,remove,Modify} = require("../service/addservice");
//验证
router.post('/getservices', async function (req, res, next) {
    // console.log(req.body)
 res.send(await getservices(req.body)) 
});
router.get('/getServicesByPage', async function (req, res, next) {
    // console.log(req.query)
 res.send(await getServicesByPage(req.query)) 
});
router.post('/remove', async function (req, res, next) {
    console.log(await remove(req.body))
 res.send(await remove(req.body)) 
});
router.post('/Modify', async function (req, res, next) {
//  console.log(req.body)
 res.send(await Modify(req.body)) 

});



module.exports = router;