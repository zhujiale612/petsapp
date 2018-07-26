var mongoose = require('mongoose');
require("./model/user.js")
require("./model/order.js")
var dbURI = 'mongodb://localhost/last';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});