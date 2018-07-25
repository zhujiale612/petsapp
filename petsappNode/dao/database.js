var mongoose = require('mongoose');
require("./model/user.js")
var dbURI = 'mongodb://localhost/last';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});