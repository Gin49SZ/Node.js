const express = require('express');

const app = express();

// 导入json文件
const {singers} = require('./singers.json');

app.get('/singer:id.html', (req, res)=>{
    res.setHeader('content-type', 'text/html;charset=utf-8');
    // 获取路由参数
    let {id} = req.params;

    // 在singers中寻找对应id的数据
    let result = singers.find(item=>{
        if(item.id == Number(id)){
            return true;
        }
    });
    if(result){
        res.end(`
        <!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>${result.singer_name}</h1>
            <img src="${result.singer_pic}"/>
        </body>
        </html>
        `);        
    }else{
        res.end("Can't find him/her");
    }

});

app.listen(3000, ()=>{
    console.log('服务已启动， 端口3000正在监听中...');
});