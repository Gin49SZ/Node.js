// 西游记
const xiYou = ['唐僧', '孙悟空', '猪八戒', '沙和尚'];

// 要求：输出一个 ul li 集合，每一个li包含一个成员

const ejs = require('ejs');
const fs = require('fs');

// let result = ejs.render(`
// <ul>
//     <% xiYou.forEach(item=>{ %>

//     <li><%= item %></li>

//     <% }) %>
// </ul>
// `, {xiYou: xiYou});

let html_after_ejs = ejs.render(fs.readFileSync('./02-西游.html').toString(), {xiYou: xiYou});

console.log(html_after_ejs);








