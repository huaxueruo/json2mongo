var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var config=require('../myapp/config/config')
var ceshiRouter = require('./routes/ceshi');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/ceshi', ceshiRouter);

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


// 连接数据库
// =============================================================================
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${config.dbHost}:${config.dbPort}/${config.dbDatabase}`, function (err) {
    if (err) {
        console.log(err, "数据库连接失败");
        return;
    }
    console.log('数据库连接成功');
    // console.log(port)
    // app.listen(port, host, function (err) {
    //     if (err) {
    //         console.error('err:', err);
    //     } else {
    //         console.info(`===> 已连接数据库${config.dbPort}/testluojie，服务器运行中`)
    //     }
    // });
});



module.exports = app;
