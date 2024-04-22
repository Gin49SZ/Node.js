const http = require('http');
const fs = require('fs'); 


// 当html中导入css和js时候，使用优化中的方法无法响应正确的html内容
const server = http.createServer((request, response)=>{
    // 当第一次返回的html中请求对应的css和js内容时候，服务器也会返回responseHtml，因此样式无法正常获取
    // response.setHeader('content-type', 'text/html;charset=utf-8');
    // 调整回调函数，根据路径响应对应的结果，而不是绑定某个特定的文件
    // 1. 获取请求的url路径
    let {pathname} = new URL(request.url, 'http://127.0.0.1:9000');
    var responseFile;
    if(pathname === "/"){
        responseFile = fs.readFileSync(__dirname + '/文档2/10-table.html');     
    }else if(/.ico/.test(pathname)){
        responseFile = "null";
    }else{
        responseFile = fs.readFileSync(__dirname + '/文档2' + pathname);     
    }
    response.end(responseFile);
    
});

server.listen(9000, ()=>{
    console.log('服务已经启动');
});