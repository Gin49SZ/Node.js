/**
 * 按照要求搭建HTTP服务
 * 
 * GET  /login 显示表单网页
 * POST /login 获取表单中的 [用户名] 和 [密码]
 */

const express = require('express');

// 导入 body-parser 解析请求体
const bodyParser = require('body-parser');

const app = express();

// 解析json格式的请求体 中间件
const jsonParser = bodyParser.json();

// 解析querystring格式的请求体 中间件
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/login', (req, res)=>{
    // 响应文件内容
    res.sendFile(__dirname + '/11-form.html');
});

app.post('/login', urlencodedParser,(req, res)=>{
    // 获取用户名和密码

    // urlencodedParser执行完毕，会在请求对象(req)新增一个属性body
    console.log(req.body);
    res.send('获取用户数据');
});

app.listen(3000, ()=>{
    console.log('server is running...');
});






