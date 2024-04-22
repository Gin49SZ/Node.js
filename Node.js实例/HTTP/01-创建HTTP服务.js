// 1. 导入HTTP模块
const http = require('http');

// 2. 创建服务对象  接受一个回调函数，接受两个实参分别是请求对象，封装请求报文和响应对象，封装响应报文
const server = http.createServer((request, response)=>{
    // 当服务接收到http请求的时候，就会执行，即发送和接受的时候
    response.setHeader('content-type', 'text/html;charset=utf-8');
    response.end('Hello HTTP Server 你好HTTP'); // 设置响应体
});

// 3. 监听端口，启动服务
server.listen(9000, ()=>{
    // 当服务启动成功后执行回调函数
    console.log('服务已经启动');
});
