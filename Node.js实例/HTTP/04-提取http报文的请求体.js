// 1. 导入HTTP模块
const http = require('http');

// 2. 创建服务对象  接受一个回调函数，接受两个实参分别是请求对象，封装请求报文和响应对象，封装响应报文
const server = http.createServer((request, response)=>{
    // 当服务接收到http请求的时候，就会执行，即发送和接受的时候
    response.setHeader('content-type', 'text/html;charset=utf-8');

    // 要获取请求体，需要以下步骤
    // 1. 声明一个变量
    let body = '';

    // 2. 绑定data事件 请求体本身也可以作为流式读取的对象
    request.on('data', chunk => {
        body += chunk; // chunk本身是一个buffer
    });

    // 3. 绑定一个end事件 读取完毕后执行的操作
    request.on('end', () => {
        console.log(body); // 注意：默认情况下，get请求的请求体一般都是空的
    });
    
    response.end('Hello HTTP Server'); // 设置响应体
});

// 3. 监听端口，启动服务
server.listen(9000, ()=>{
    // 当服务启动成功后执行回调函数
    console.log('服务已经启动');
});
