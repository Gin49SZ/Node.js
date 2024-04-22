/**
 * 记录每个请求的 url 与 IP 地址
 */

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// 声明中间件函数
function recordMiddleware(req, res, next){
    /**
     * req : 接受请求报文的对象
     * res : 接受响应报文的对象
     * next : 内部函数，执行之后会指向内部后续的路由回调或者中间件函数回调
     */
    
    // 获取 url 和 ip
    let {url, ip} = req;

    // 将信息保存在文件中
    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip} \r\n`);  
    
    // 调用next
    next();
}

// 全局使用中间件函数
app.use(recordMiddleware);

app.get('/home', (req, res)=>{

    res.send('前台首页');
});

app.get('/admin', (req, res)=>{

    res.send('后台首页');
});

app.all('*', (req, res)=>{
    res.send('<h1>404 Not Found</h1>');
});

app.listen(3000, ()=>{
    console.log('全局中间件-服务器已启动，端口3000');
});