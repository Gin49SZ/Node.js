// 1. 导入 express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由

// get
app.get('/home', (req, res)=>{
    res.end('hello express');
});

// post
app.post('/login', (req, res)=>{
    res.end('login success');
});

// get和post
app.all('/all', (req, res)=>{
    if(req.method == 'GET'){
        res.end('use get');
    }else{
        res.end('use post');
    }
});

// 通配 当没有路径可以匹配到时候
app.all('*', (req, res)=>{
    res.end('404 Not Found');
});


// 4. 监听端口，启动服务
app.listen(3000, ()=>{
    console.log('服务已启动， 端口3000监听中...');
});












