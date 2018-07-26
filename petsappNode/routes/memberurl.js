var express = require('express');
var router = express.Router();

const {uploadFile} =require("../util/upload")
 
router.post('/upload', async function (req, res, next) {
    const {success,data}=await  uploadFile(req, res,{
        fileType: 'memberimg',

        path: "./public/images/",
    })
    res.send(data.url)
});
module.exports = router;