/**
 * 需求：
 *  复制[资料]文件夹下的[图片1.jpg]
 */
const fs = require('fs');

// 测试两种方法的内存占用量
// Node.js内置了process模块，用于获得代码运行的内存占用量
// rss表示整个占用内存的大小 单位字节
const process = require('process');

// 方式一 readFile
// 读取文件内容
let data = fs.readFileSync('../资料/图片1.jpg');

// 写入文件
fs.writeFileSync('../资料/图片2.jpg', data);

console.log(process.memoryUsage());   

// ----------------------------------------------


// 方式二 流式操作
// 创建读取流对象
const rs = fs.createReadStream('../资料/图片1.jpg');

// 创建写入流对象
const ws = fs.createWriteStream('../资料/图片3.jpg');

// 绑定 data 事件
rs.on('data', chunk => {
    ws.write(chunk);
});

rs.on('end', () => {
    console.log(process.memoryUsage());    
});

// 方法三 使用pipe管道 也是使用流对象
rs.pipe(ws);
