var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({

    //门店id
    shopId: {
        type: String
    },
    //门店名
    shopName: {
        type: String
    },
    //用户名
    memberName: {
        type: String
    },
    //用户地址
    memberAdd: {
        type: String
    },
    //订单描述
    goodsName:{
        type: String
    },
    serviceName:{
        type: String
    },
    //订单状态
    orderState: {
        type: String
    }
});

mongoose.model("order", OrderSchema, "order");