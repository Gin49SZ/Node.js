const http = require('http');

// 1. 导入url模块
const url = require('url');

const server = http.createServer((request, response)=>{
    response.setHeader('content-type', 'text/html;charset=utf-8');
    response.end('URL and Search String');

    // 2. 解析 response.url
    // console.log(request.url);
    let res = url.parse(request.url, true); // 使用parse解析url 如果第二个参数为true则query会返回一个对象

    // 路径
    let pathname = res.pathname;

    // 查询字符串
    let [name, age] = [res.query.name, res.query.age]; // res.query = { name: 'Li Ming', age: '14' }

    
    console.log(name, age);
});

// 3. 监听端口，启动服务
server.listen(9000, ()=>{
    console.log('服务已经启动');
});
