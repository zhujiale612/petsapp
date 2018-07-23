var mongoose = require('mongoose');
require("./model/shopHouse")


var dbURI = 'mongodb://localhost/emps';
mongoose.connect(dbURI);
mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});
