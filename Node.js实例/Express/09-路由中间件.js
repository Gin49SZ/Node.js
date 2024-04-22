/**
 * 针对 /admin /setting 的请求，要求URL携带 code=521 参数，如果未携带提示 【暗号错误】 
 */

const express = require('express');

const fs = require('fs');
const path = require('path');

// 创捷应用对象
const app = express();

// 声明中间件
let checkCodeMiddleware = (req, res, next)=>{
    // 判断URL中是否code参数等于521
    if(req.query['code'] === '521'){
        next();
    }else{
        res.send('暗号错误');
    }
}

// 创建路由
app.get('/home', (req, res)=>{
    res.send('前台首页');
});

// 后台
app.get('/admin', checkCodeMiddleware,(req, res)=>{
    res.send('后台首页');

});

// 后台设置
app.get('/setting', checkCodeMiddleware,  (req, res)=>{
    res.send('设置页面');
});

app.listen(3000, ()=>{
    console.log('路由中间件-服务器已启动，端口3000');
});









