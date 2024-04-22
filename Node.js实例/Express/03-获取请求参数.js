//导入 express
const express = require('express');

//创建应用对象
const app = express();

//创建路由

// get
app.get('/request', (req, res)=>{
    // 原生操作
    // console.log(req.method);
    // console.log(req.url);
    // console.log(req.httpVersion);
    // console.log(req.headers);

    // express操作
    console.log(req.path);
    console.log(req.query);
    console.log(req.ip);

    // 可以单独获取某一个请求头
    console.log(req.get('host'));

    res.end('over');
});


// 监听端口，启动服务
app.listen(3000, ()=>{
    console.log('服务已启动， 端口3000监听中...');
});
