var mongoose = require('mongoose');
require("./model/user.js")
require("./model/order.js")
require("./model/members")
require("./model/service")
require("./model/goods")
require("./model/shopHouse")
require("./model/speakSth")
mongoose.connect('mongodb://localhost:27017/f48',{useNewUrlParser:true});
mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ');
});