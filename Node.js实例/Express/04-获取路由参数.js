//导入 express
const express = require('express');

//创建应用对象
const app = express();

//创建路由

// 使用占位符 :id (冒号后面可以任意指定内容)
app.get('/:id.html', (req, res)=>{
    res.setHeader('content-type', 'text/html;charset=utf-8');

    // 获取路由参数
    var phoneid = req.params.id; // params是请求对象上面的一个属性，用来存储所有的路由参数, id是其中一个
    res.end('商品代号：'+phoneid);
});


// 监听端口，启动服务
app.listen(3000, ()=>{
    console.log('服务已启动， 端口3000监听中...');
});
