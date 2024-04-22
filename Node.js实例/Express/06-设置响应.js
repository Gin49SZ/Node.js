const express = require('express');

const app = express();

// 导入json文件
const {singers} = require('./singers.json');

app.get('/response', (req, res)=>{
    // 原生响应
    // res.statusCode = 404;
    // res.statusMessage = 'Cannot find';
    // res. setHeader('xxx', 'yyy');
    // res.write('hello express');
    // res.end("Cannot find");

    // express 响应
    // res.status(500);
    // res.set('aaa', 'bbb');
    // res.send('你好'); // send 在调用之后会自动设置响应格式为utf-8

    res.status(500).set('abc', 'def').send('你好'); // 使用express可以进行连贯设置（链式调用）

});

app.listen(3000, ()=>{
    console.log('服务已启动， 端口3000正在监听中...');
});