const fs = require('fs');

// 导入path
const path = require('path');

// resolve  拼接规范路径
let absolutePath = path.resolve(__dirname, './index.html');
console.log(absolutePath);

// sep  分隔符
console.log(path.sep);  // Linux输出/, Windows输出\

// parse 解析路径并返回对象 __dirname '全局变量'
console.log(path.parse(__filename));

// basename 获取路径的基础名称
console.log(path.basename(__filename));

// dirname  获取路径的目录名
console.log(path.dirname(__filename));

// extname  获取文件的扩展名
console.log(path.extname(__filename));
