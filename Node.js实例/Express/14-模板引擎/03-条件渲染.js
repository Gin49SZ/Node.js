/**
 * 通过 isLogin决定输出内容
 * true 输出[<span>欢迎回来</span>]
 * false 输出[<button>登录</button> <button>注册</button>]
 */
const ejs = require('ejs');
const fs = require('fs');

// 变量
let isLogin = false;

// EJS实现
// let result = ejs.render(`
//     <% if(isLogin){ %>
//         <span>欢迎回来</span>
//     <% }else{ %>
//         <button>登录</button> <button>注册</button>
//     <% } %>
// `, {isLogin: isLogin});

let html_after_ejs = ejs.render(fs.readFileSync('./03-home.html').toString(), {isLogin: isLogin});

console.log(html_after_ejs);

