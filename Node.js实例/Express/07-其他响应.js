const express = require('express');

const app = express();

// 导入json文件
const {singers} = require('./singers.json');

app.get('/other', (req, res)=>{
    // 跳转响应
    // res.redirect('https://www.baidu.com');

    // 下载响应
    // res.download(__dirname + '/package.json');

    // JSON响应
    // res.json({
    //     'name': 'Li Ming',
    //     'info': 'Class 1 Grade 4'
    // });

    // 响应文件内容
    res.sendFile(__dirname + '/test.html'); // 也可以使用 path.resolve

    
});

app.listen(3000, ()=>{
    console.log('服务已启动， 端口3000正在监听中...');
});