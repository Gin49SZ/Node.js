// 1. 引入fs模块
const fs = require('fs');

// 2. 异步读取  会传递两个参数到回调函数，一个是错误信息err，另一个是读取内容data
fs.readFile('./观书有感.txt', (err, data)=>{
    if(err){
        console.log('读取失败');
    }else{
        // 使用toString将读取到的内容转化为字符串
        console.log(data.toString());
    }
});

// 3. 同步读取 没有回调函数的部分，将读取到的内容作为返回值
let data = fs.readFileSync('./观书有感.txt');
console.log(data.toString());