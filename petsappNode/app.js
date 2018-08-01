var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./dao/database.js')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
//订单
var orderRouter = require('./routes/order');
//购物车
var shopcarRouter = require('./routes/shopcar');
//宠主
var membersRouter = require('./routes/members');
var memberurlRouter = require('./routes/memberurl');
//服务
var serviceRouter = require('./routes/serviceList');
//商品
var goodsRouter = require('./routes/goodsRouter');
var filesRouter = require('./routes/files');
//门店
var shopHouseRouter = require('./routes/shopHouse');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', usersRouter);
//订单
app.use('/order', orderRouter);
//购物车
app.use('/shopcar', shopcarRouter);
//宠主
app.use('/membersRouter', membersRouter);
app.use('/memberurl', memberurlRouter);
//服务
app.use('/serviceList', serviceRouter);
//商品
app.use('/goodsRouter', goodsRouter);
app.use('/files', filesRouter);
//门店
app.use('/shopHouse', shopHouseRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
