var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
    //名称
    shopName: {
        type: String
    },
    // 营业执照号码
    shopLicenceNum: {
        type: String
    },
    // 营业执照图片
    // shopLicenceImg: {
    //     type: String
    // },
    // 营业地址
    shopAdd: {
        type: String
    },
    // 法人
    shopCorporate: {
        type: String
    },
    // 联系电话
    shopTel: {
        type: String
    },
    // 头图
    shopImg: {
        type: String
    },
    // 特色
    shopFeature: {
        type: String
    },
    //头图
    shopImg: {
        type: String
    },
});

mongoose.model("movies", MovieSchema, "movies");