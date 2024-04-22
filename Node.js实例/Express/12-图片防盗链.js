const express = require('express');

const app = express();

// 声明全局中间件
app.use((req, res, next)=>{
    // 检测请求头中的 referer 是否为 127.0.0.1
    let referer = req.get('referer');
    if(referer){
        // 实例化
        let url = new URL(referer);

        // 获取 hostname
        let hostname = url.hostname;
        
        // 判断
        if(hostname !== '127.0.0.1'){
            // 响应 404
            res.status(404).send('<h1>404 Not Found</h1>');
            return;
        }
    }
    next();
});

// 静态资源设置
app.use(express.static(__dirname + '/public'));

app.get('/home', (req, res)=>{
    res.send('Express');
});

app.listen(3000, ()=>{
    console.log('服务已启动');
});