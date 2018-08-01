var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShopcarSchema = new Schema({

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
    GName:{
        type: String
    },
    price:{
        type: Number
    },
    gimgs:{
        type:Array
    },
    serviceName:{
        type: String
    },
    count:{
        type: Number
    },
  
       
 
});

mongoose.model("shopcar", ShopcarSchema, "shopcar");