// 1. 导入 uniq 包
const uniq = require('uniq');

// 2. 使用函数
let arr = [1, 2, 3, 4, 5, 2, 3, 4, 4, 2, 3, 4];
let result = uniq(arr);
console.log(result);