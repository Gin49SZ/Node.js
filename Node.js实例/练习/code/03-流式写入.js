/**
 * 观书有感.txt
 */

// 1. 导入fs
const fs = require('fs');

// 2.创建一个写入流对象
let ws = fs.createWriteStream('./观书有感.txt');

// 3.wirte
ws.write('半亩方塘一鉴开\r\n');
ws.write('天光云影共徘徊\r\n');
ws.write('问渠哪得清如许\r\n');
ws.write('为有源头活水来\r\n');

// 4.关闭通道
ws.close();