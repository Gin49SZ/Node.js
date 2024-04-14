// buffer与字符串转换
let buf_4 = Buffer.from([105, 105, 105]);
let buf_str = buf_4.toString();
console.log(buf_str) // iii

// 通过[]的方式对buffer进行读写操作
let buf_5 = Buffer.from("hello");
let buf_5_1b = buf_5[1].toString(2); // toString的参数表示转换的进制
console.log(buf_5_1b); // 01100101 

buf_5[1] = 511;
buf_5_1b = buf_5[1].toString(2);
console.log(buf_5_1b); // 11111111 高于8位的内容被舍弃