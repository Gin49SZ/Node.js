var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan'); // 日志工具

var indexRouter = require('./routes/index'); // 导入路由
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // 设置ejs的路径
app.set('view engine', 'ejs');

app.use(logger('dev')); // 应用中间件 日志
app.use(express.json()); // 应用中间件 请求体
app.use(express.urlencoded({ extended: false })); // 应用中间件 请求体
app.use(cookieParser()); // 应用中间件 Cookie
app.use(express.static(path.join(__dirname, 'public'))); // 静态资源文件夹

app.use('/', indexRouter); // 设置路由前缀 例如设置为users， 则对应路由模块中的每一个路由都是在users/的前提下配置
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404)); // 404 中间件
});

// 也可以使用app.all('*', function(req, res){...});


// 错误处理
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app; // 暴露
