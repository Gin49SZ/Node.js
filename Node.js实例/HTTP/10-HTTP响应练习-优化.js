const http = require('http');
const fs = require('fs'); 

const server = http.createServer((request, response)=>{
    response.setHeader('content-type', 'text/html;charset=utf-8');
    // 使用fs模块读取html文件的内容，然后放入响应体中
    let responseHtml = fs.readFileSync(__dirname + '/文档/10-table.html');

    response.end(responseHtml); // end可以接受buffer作为参数
});

server.listen(9000, ()=>{
    console.log('服务已经启动');
});