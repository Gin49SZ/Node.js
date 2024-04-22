// 1. 安装 EJS
// 2. 导入 EJS
const ejs = require('ejs');
const fs = require('fs');

// 字符串
let str1 = 'abc';
let str2 = 'def';

// 使用ejs渲染
// let result = ejs.render('这是渲染的字符串:<%= str %>', {str: str1}); // 这是渲染的字符串:abc

let html = fs.readFileSync('./01-html.html').toString();
let html_after_ejs = ejs.render(html, {str: str2}); // 这是渲染的字符串:def

console.log(html_after_ejs);
