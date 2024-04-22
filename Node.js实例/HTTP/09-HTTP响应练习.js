const http = require('http');

const server = http.createServer((request, response)=>{
    response.setHeader('content-type', 'text/html;charset=utf-8');
    response.write(`
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <title>09-HTTP响应练习</title>
        <style>
            td{
                width:50px;
                height:50px;
                padding:20px 40px;
                text-align:center;
                cursor:default;
                box-shadow: 0;
                transition: 0.3s linear all;
            }
            td:hover {
                box-shadow: 0 0 30px greenyellow inset;
            }
            tr:nth-child(2n){
                background-color:#66666688;
            }
            tr:nth-child(2n-1){
                background-color:#00000033;
            }
        </style>
    </head>
    <body>
        <table border=1 cellspacing=0>
        <tr>
            <td>abc</td>
            <td>abc</td>
            <td>abc</td>
        </tr>
        <tr>
            <td>abc</td>
            <td>abc</td>
            <td>abc</td>
        </tr>
        <tr>
            <td>abc</td>
            <td>abc</td>
            <td>abc</td>
        </tr>
        <tr>
            <td>abc</td>
            <td>abc</td>
            <td>abc</td>
        </tr>
        </table>
    
        <script>
            let tdList = document.querySelectorAll("td");
            for(let i=0;i<tdList.length;i++){
                tdList[i].onclick = function(){
                    this.style.border = "1px solid yellow";
                    this.style.backgroundColor = "#ffff0099";
                    for(let i=0;i<tdList.length;i++){
                        if(tdList[i] != this){
                            tdList[i].style = "";
                        }
                    }
                };
            }
        </script>    
    </body>
    </html>
    `);
    response.end();
});

server.listen(9000, ()=>{
    console.log('服务已经启动');
});