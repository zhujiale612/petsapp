var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AddshopHouseSchema = new Schema({
    //门店名称
    shopName: {
        type: String
    },
    // 营业执照号码
    shopLicenceNum: {
        type: String
    },
    //定位
    position: {
        type: String
    },
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
        type: Object
    },
    // 特色
    shopFeature: {
        type: String
    },
    //状态
    type: {
        type: Number
    },
    usersId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    userName: {
        type: String
    }
});

mongoose.model("shopHouse", AddshopHouseSchema, "shopHouse");