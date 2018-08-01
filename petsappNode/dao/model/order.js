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
    members:{
        type:Object
    },
    
    totalPrice:{
        type: Number
    },
    goodList:{
        type:Array
    },
    totalCount:{
        type: Number
    },
    //订单状态
    orderState:{
        type: String
    }
       
 
});

mongoose.model("order", OrderSchema, "order");