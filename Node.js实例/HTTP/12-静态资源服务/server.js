/**
 * 创建一个HTTP服务，端口为 9000 ，满足如下需求
 * GET /index.html      响应page/index.html
 * GET /css/app.css     响应page/css/app.css
 * GET /image/logo.png  响应page/images/logo.png
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { escape } = require('querystring');

// 声明一个变量 
const mime = {
    html:'text/html',
    css:'text/css',
    js:'text/javascript',
    png:'image/png',jpg:'image/jpeg',
    gif:'image/gif',
    mp4:'video/mp4',
    mp3:'audio/mpeg',
    json:'application/json'
}


const server = http.createServer((request, response)=>{
    if(request.method !== 'GET'){
        response.statusCode = 405;
        response.end('方法不被允许');
    }
    let {pathname} = new URL(request.url, 'http://127.0.0.1:9000');
    if(pathname === '/'){
        // 根路径返回index.html
        // 读取文件 fs异步api
        fs.readFile(__dirname + '/page/index.html', (err, data)=>{
            if(err){
                response.setHeader('content-type', 'text/html;charset=utf-8');
                response.statusCode = 500;
                response.end('文件读取失败');
                return;
            }
            response.setHeader('content-type', 'text/html;charset=utf-8');
            // 响应文件内容
            response.end(data);
        });
    }else{
        // 拼接文件路径
        let filePath = __dirname + '/page' + pathname;

        // 读取文件 fs异步api
        fs.readFile(filePath, (err, data)=>{
            if(err){
                // 完善错误处理
                switch(err){
                    case 'ENOENT':
                        response.statusCode = 404;
                        response.end('找不到内容');
                        return;
                    case 'EPERM':
                        response.statusCode = 403;
                        response.end('您无权访问此页面');
                        return;
                    default:
                        response.statusCode = 500;
                        response.end('内部错误！');
                }


                response.setHeader('content-type', 'text/html;charset=utf-8');
                response.statusCode = 500;
                response.end('文件读取失败');
                return;
            }
            // 获取文件后缀名
            let ext = path.extname(filePath).slice(1);
            let type = mime[ext];
            if(type){
                // 如果获取到值 
                response.setHeader('content-type', type + ';charset=utf-8');
            }else{
                // 如果没有匹配到
                response.setHeader('content-type', 'application/octet-stream;charset=utf-8');

            }


            // 响应文件内容
            response.end(data);
        });        
    }
});

server.listen(9000, ()=>{
    console.log('服务器已启动...');
});