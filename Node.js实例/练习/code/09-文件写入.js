/**
 * 需求：
 * 新建一个文件，座右铭.txt，写入内容，三人行，则必有我师焉
 */

// 1. 导入fs模块 require是函数，用于导入模块 fs是模块的名称
const fs = require('fs');
// 2. 写入文件 回调函数会在写入完毕后执行，并且传递一个错误参数
fs.writeFile('./座右铭.txt', '三人行，则必有我师焉', err => {
    // 写入失败，err是错误对象  写入成功，err是null
    if(err){
        console.log('写入失败');
        return ;
    }
    console.log('写入成功，这是IO线程');
});
console.log('这是JS主线程');

// 同步写入 syc同步 没有回调函数的参数，效率不如异步
fs.writeFileSync('./data.txt', 'test测试');
