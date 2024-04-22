// 1. 引入fs模块 require是node.js中的用于模块的导入和导出的内置函数
const fs = require('fs');

// 2. 调用 appendFile err是写入后返回的参数，如果成功是null，失败则是错误对象
fs.appendFile('./座右铭.txt', '，择其善者而从之，不善者而改之', err => {
    if(err){
        console.log('写入失败');
        return;
    }
    console.log('追加写入成功！');

});
// 换号要使用\r\n
fs.appendFile('./座右铭.txt', '\r\n温故而知新，可以为师矣');

// 同步的用法与writeFile一致
fs.appendFileSync('./座右铭.txt', '\r\n温故而知新，可以为师矣');

// 用writeFile实现追加 在第三个非必须参数[, option]中，添加flag为a表示追加模式，也可以追加内容
fs.writeFile('./座右铭.txt', 'War never changes', {flag:'a'}, err =>{
    if(err){
        console.log('写入失败');
        return;
    }
    console.log('写入成功！');    
});