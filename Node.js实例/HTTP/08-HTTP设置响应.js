const http = require('http');

const server = http.createServer((request, response)=>{
    // 1. 设置响应状态码
    response.statusCode = 203;

    // 2. 设置响应状态描述
    response.statusMessage = 'abc123';

    // 3. 响应头
    response.setHeader('content-type', 'text/html;charset=utf-8');
    response.setHeader('abcdefg', '1234567'); // 也可以自行设置响应头的内容
    response.setHeader('test', ['a', 'bb', 'ccc']) // 设置多个同名的响应头

    // 4. 响应体的设置
    response.write('before response body'); // write的内容会先于response显示，但一般有write就不会设置end

    response.write('a1');
    response.write('b2');
    response.write('c3');
    response.write('d4'); // 可以多次调用write，但是end只能有一个，也必须为每一次响应设置end

    response.end();
});

server.listen(9000, ()=>{
    console.log('服务已经启动');
});