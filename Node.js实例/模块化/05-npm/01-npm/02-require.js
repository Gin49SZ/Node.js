// 1. 导入 uniq 包
// const uniq = require('uniq');
const uniq = require('./node_modules/uniq/uniq'); // 等同于导入同名文件夹下的json中main所指的js文件

// 2. 使用函数
let arr = [1, 2, 3, 4, 5, 2, 3, 4, 4, 2, 3, 4];
let result = uniq(arr);
console.log(result);