const http = require('http');

const server = http.createServer((request, response)=>{
    response.setHeader('content-type', 'text/html;charset=utf-8');
    
    // 获取请求的方法 使用解构赋值的方法
    let {method} = request;

    // 获取请求的url路径 使用解构赋值的方法
    let {pathname} = new URL(request.url, 'http://127.0.0.1:9000');

    if(pathname === '/login' && method === 'GET'){
        response.end('登录页面');
        return;
    }
    if(pathname === '/reg' && method === 'GET'){ // register 注册
        response.end('注册页面');
        return;
    }
    response.end('来到了没有知识的荒原~');
});

server.listen(9000, ()=>{
    console.log('服务已经启动');
});