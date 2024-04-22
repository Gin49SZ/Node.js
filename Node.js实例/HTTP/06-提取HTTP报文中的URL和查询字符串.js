const http = require('http');

const url = require('url');

const server = http.createServer((request, response)=>{
    response.end('URL and Search String');

    // 实例化 URL 的对象
    // let url = new URL('http://127.0.0.1:9000/search?name=Li%20Ming&age=14'); // URL对象，host、protocal等以关键字存在
    
    // 使用 request.url 拼接路径
    let url = new URL(request.url, 'http://127.0.0.1:9000'); // request.url 不包含协议名，主机名和端口号
    
    // 输出路径
    // console.log(url.pathname);

    // 输出查询字符串，使用URL对象中的searchParams
    console.log(url.searchParams.get('name')); // 使用get来获取查询字符串中的值

});

server.listen(9000, ()=>{
    console.log('服务已经启动');
});