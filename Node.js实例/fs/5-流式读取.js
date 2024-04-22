// 1.
const fs = require('fs');

// 2.
const rs = fs.createReadStream('./data.txt')

// 3. 绑定data事件 chunk块
// on是一个事件监听器，用于当特定事件被触发的时候执行一些代码
// data是一个事件，当读取或写入数据流时候，data事件允许监听并处理传输的数据流
// 每当读取一块内容的时候就会执行这段回调函数
rs.on('data', chunk => {
    console.log(chunk);
})

// 4. end 可选事件
rs.on('end', () => {
    console.log('读取完成');
});