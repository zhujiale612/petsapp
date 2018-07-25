var express = require('express');
var router = express.Router();

let { getuser, register } = require('../service/service.js')

router.post('/users', async function (req, res, next) {
    console.log(res.body)
    res.send(await getuser(res.body))
});

// router.post('/adduser', async function (req, res, next) {
//     res.send(await adduser(req.body))
// });

router.post('/register', async function (req, res, next) {
    res.send(await register(req.body))
});
module.exports = router;

router.post('/Land', async function (req, res, next) {
    res.send(await Land(req.body))
});