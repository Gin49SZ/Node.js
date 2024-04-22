# Node.js

## 一、序章

### 为什么要学习Node.js？

1. 可以让其他人访问我们编写的网页
2. 为后续的框架学习打好基础

### 什么是Node.js?

Node.js是一个开源的，跨平台的JavaScript运行环境，通俗来讲，它是一款可以运行JS的应用程序

### Node.js的作用

#### 1. 开发服务器应用

将网页部署在服务器，用户通过url发送请求，浏览器解析服务器发送的文件就可以访问网页

Node.js在这一过程中扮演解析用户请求并发送文件的角色

#### 2. 开发工具类应用

提高前端开发的效率与质量的工具：Webpack、Vite、Babel

这三个工具都是基于Node.js创建，并且我们也可以创建一些自己的工具

#### 3. 开发桌面端应用

基于Node.js的electron是一个编写桌面端应用的程序，其开发过的软件包括VScode、Figma、Postman

### 安装和启动Node.js

[Node.js — Run JavaScript Everywhere (nodejs.org)](https://nodejs.org/en)

#### 1. 检查自己的安装版本

在powershell中输入`node -v`即可查看版本

```cmd
C:\Users\Gin49SZ>node -v
v20.12.2
```

#### 2. 命令行工具

在运行Node.js的过程中，主要会使用命令行来进行程序的运行，终端是常用的运行命令行工具

##### 2.1 命令行的结构

启动方式

- 使用win+r快捷键，输入cmd

- 在 *开始* 中输入cmd

命令结构与函数的结构类

```cmd
C:\Users\Gin49SZ>chrome https://www.badu.com
```

> JS:	func(v1) 
>
> cmd:	func v1

同理也可以传递多个参数

```cmd
C:\Users\Gin49SZ>chrome https://www.badu.com https://www.jd.com
```

##### 2.2 常用命令

命令行左侧的一串参数`C:\Users\Gin49SZ>`标识当前的工作目录

*切换磁盘*

```cmd
C:\Users\Gin49SZ>:d
```

*查看当前文件夹下目录文件*

```cmd
D:\>dir
```

*打开当前文件夹下的某个文件夹*

```cmd
D:\>cd Program Files
```

*切换到上一级目录*（.表示当前目录，..表示上一级目录）

```cmd
D:\Program Files\>cd ..
```

*查看文件夹下所有内容，包含子文件夹中的内容*

```cmd
D:\>dir /s
```

#### 3. 使用Node.js运行JS

创建一个JS文件

```js
console.log("Hello World");
```

在该文件所在目录下的终端中输入命令行，提示`Hello World`

```cmd
C:\Users\Gin49SZ\Desktop\Study\前端开发\Node.js\Node.js实例>node helloworld.js
Hello World
```

如果使用IDE，也可以在对应的集成终端中使用命令行，更加方便快捷

#### 4. 注意事项

1. 在Node.js中不能使用DOM和BOM的API

> JS的组成
>
> ```
> JavaScript
>     |
>     |__ ECMAScript核心语法
>     |
>     |__ Web API:DOM、BOM、AJAX、Storage、console、定时器、alert/confirm/prompt ...
> ```

> Node.js中的JS组成
>
> ```
> Node.js中的JavaScript
>     |
>     |__ ECMAScript核心语法
>     |
>     |__ Node API:fs、url、http、util、console、定时器、path ...
> ```



2. Node.js中的顶级对象是global，通过访问global或者globalThis获取对象属性

```js
console.log(global);
console.log(globalThis);
```

> 在JavaScript中，`global`和`globalThis`是两个不同的概念，它们都与获取全局作用域相关，但具体的使用场景和行为有所不同。
>
> ### global
>
> `global`是一个对象，代表了浏览器或Node.js环境中的全局作用域。在浏览器中，`global`对象就是`window`对象，而在Node.js中，`global`对象则是`global`本身。`global`对象提供了一种访问全局变量的方式，但它并不是一个标准的JavaScript对象，因此它可能不在所有JavaScript环境中都可用。
>
> ### globalThis
>
> `globalThis`是一个较新的JavaScript内置对象，它提供了一个标准的方式来获取当前执行上下文的全局对象，无论在何种环境中。这意味着在任何JavaScript环境中，`globalThis`都会返回正确的全局对象。这使得`globalThis`成为了一个跨环境的解决方案，特别是在那些`global`对象可能不存在或不一致的环境中。
>
> ### 区别
>
> 1. **兼容性**：`globalThis`提供了更好的跨环境兼容性，因为它在所有JavaScript环境中都可用，而`global`可能只在某些环境中可用。
> 2. **标准性**：`globalThis`是ECMAScript标准的一部分，而`global`不是标准对象。
> 3. **使用场景**：当你需要确保代码在不同JavaScript环境中都能以相同的方式访问全局作用域时，应该使用`globalThis`。如果你确定代码只会在特定的环境（如浏览器或Node.js）中运行，那么使用`global`也是可以的。

### Buffer

#### 1. Buffer概念

Buffer即缓冲区，是一个类似Array的对象，用于表示固定长度的字节序列，**本质是一段内存空间，用于处理二进制数据**

#### 2. Buffer特点

1. Buffer大小固定且无法调整

2. Buffer性能较好，可以直接操作计算机内存

3. 每个元素的大小为1Byte

#### 3. Buffer使用

##### 3.1 创建Buffer

```js
// 1.alloc 创建的每一个Buffer都归零
let buf = Buffer.alloc(10);

// 2. allocUnsafe 直接获取内存空间创建的Buffer，不执行清零操作可能导致Buffer中包旧的内存数据（但是速度更快）
let buf_2 = Buffer.allocUnsafe(10);

// 3. from 将一个字符串或者数组转为Buffer
let buf_3 = Buffer.from("hello"); // 会使用unicode编码（16进制）
let buf_4 = Buffer.from([1, 3, 4, 5, 4, 33, 34, 23]); //会转化为16进制
```

##### 3.2 操作与注意点

```js
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
```

------



## 二、fs模块

fs(file system)模块即文件系统模块，可以实现与硬盘的交，例如 **文件的创建、删除、重命名、移动** 和 **文件内容的写入、读取，以及文件夹的相关操作**

### 文件写入

#### 1. writeFile异步写入

语法：fs.writeFile(file, data[, options], callback)

参数说明：

- file	文件名
- data	待写入的数据
- options	选项设置（可选）
- callback	写入回调

返回值：undefined

代码示例：
```js
/**
 * 需求：
 * 新建一个文件，座右铭.txt，写入内容，三人行，则必有我师焉
 */

// 1. 导入fs模块 require是函数，用于导入模块 fs是模块的名称
const fs = require('fs');
// 2. 写入文件 回调函数会在写入完毕后执行，并且传递一个错误参数
fs.writeFile('./座右铭.txt', '三人行，则必有我师焉', err => {
    // 写入失败，err是错误对象  写入成功，err是null
    if(err){
        console.log('写入失败');
        return ;
    }
    console.log('写入成功');
});
```

#### 2. 异步与同步

##### 2.2 异步写入

writeFile就是一个异步的执行模式，代码自上到下运行，到writeFile这一步会交给其他线程，即磁盘写入会启动其他线程，此时会运行两个线程，一个是JS的主线程，另一个是I/O线程，**I/O线程执行完毕之后，会将回调函数压入到任务队列之中**，等到JS主线程运行完毕之后，会将任务队列中取出回调函数并执行

```js
fs.writeFile('./座右铭.txt', '三人行，则必有我师焉', err => {
    // 写入失败，err是错误对象  写入成功，err是null
    if(err){
        console.log('写入失败');
        return ;
    }
    console.log('写入成功，这是IO线程');
});
console.log('这是JS主线程');

>>> 这是JS主线程
	写入成功，这是IO线程
```

##### 2.3 同步写入

writeFileSync是一个同步写入，参数与writeFile相同，只是没有回调函数的参数，且效率不如异步

```js
fs.writeFileSync('./data.txt', 'test测试');
```

#### 3. 追加写入

appendFile作用是在文件尾部追加内容，appendFile语法与writeFile语法完全相同

语法：

fs.appendFile(file, data[, options], callback)

fs.appendFileSync(file, data[, options])

返回值，二者都为undefined

```js
// 1. 引入fs模块 require是node.js中的用于模块的导入和导出的内置函数
const fs = require('fs');

// 2. 调用 appendFile err是写入后返回的参数，如果成功是null，失败则是错误对象
fs.appendFile('./座右铭.txt', '，择其善者而从之，不善者而改之', err => {
    if(err){
        console.log('写入失败');
        return;
    }
    console.log('追加写入成功！');

});
// 换号要使用\r\n
fs.appendFile('./座右铭.txt', '\r\n温故而知新，可以为师矣');

// 同步的用法与writeFile一致
fs.appendFileSync('./座右铭.txt', '\r\n温故而知新，可以为师矣');

// 用writeFile实现追加 在第三个非必须参数[, option]中，添加flag为a表示追加模式，也可以追加内容
fs.writeFile('./座右铭.txt', 'War never changes', {flag:'a'}, err =>{
    if(err){
        console.log('写入失败');
        return;
    }
    console.log('写入成功！');    
});
```

#### 4. 流式写入

createWriteStream流式写入

语法：const ws = fs.createWriteStream(path[, option])

参数说明：

- path	文件路径
- option	选项配置

返回值：object

```js
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
ws.close();	//ws.end(); 这一步是可选的，当脚本执行完毕之后，通道会被自动断开
```

> 程序打开一个文件是需要消耗资源的，流式写入可以减少打开关闭文件的次数，流式写入方式适用于大文件写入或者频繁写入的场景，writeFile适合于写入频率较低的场景

#### 5. 文件写入应用场景

- 下载文件	
- 安装软件
- 保存程序日志，如Git
- 编辑器保存文件
- 适配录制

> 当需要持久化保存数据时候，应该先想到文件写入

### 文件读取

#### 1. readFile异步读取

语法：fs.readFile(path[, options], callback)

参数说明：

- path	文件路径
- options	选项配置
- callback	回调函数

返回值：undefined

```js
// 1. 引入fs模块
const fs = require('fs');

// 2. 异步读取  会传递两个参数到回调函数，一个是错误信息err，另一个是读取内容data
fs.readFile('./观书有感.txt', (err, data)=>{
    if(err){
        console.log('读取失败');
    }else{
        // 使用toString将读取到的内容转化为字符串
        console.log(data.toString());
    }
});

```

#### 2. 同步读取

readFileSync是一个同步读取，使用方法和readFile一样，但是没有回调函数，会将读到的内容作为返回值

```js
// 3. 同步读取 没有回调函数的部分，将读取到的内容作为返回值
let data = fs.readFileSync('./观书有感.txt');
console.log(data.toString());
```

#### 3. 流式读取

createReadStream流式读取

语法：const rs = createReadStream(path[, option])

参数说明：

- path	文件路径
- option	选项配置

返回值：object，每次读取至多64kb，可以使用data事件监听读取的数据流

```js
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

// 4. end是一个可选事件，可以在读取完成时候触发执行一些代码
rs.on('end', () => {
    console.log('读取完成');
});
```

#### 4. 读取文件的应用场景

- 电脑开机
- 程序运行
- 编辑器打开文件
- 查看图片
- 播放视频
- 播放音乐
- Git查看日志
- 上传文件
- 查看聊天记录

实际案例 - 文件复制

```js
/**
 * 需求：
 *  复制[资料]文件夹下的[图片1.jpg]
 */
const fs = require('fs');

// 测试两种方法的内存占用量
// Node.js内置了process模块，用于获得代码运行的内存占用量
// rss表示整个占用内存的大小 单位字节
const process = require('process');
```

方式1，同步读取

```js
// 方式一 readFile
// 读取文件内容
let data = fs.readFileSync('../资料/图片1.jpg');

// 写入文件
fs.writeFileSync('../资料/图片2.jpg', data);

console.log(process.memoryUsage()); 
```

方式2，流式读取

```js
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
```

流失读取并写入，也可以使用pipe完成这一过程

```js
// 使用pipe管道 也是使用流对象
rs.pipe(ws);
```

### 文件移动与重命名

在Node.js中，可以使用rename或者renameSync来移动或者重命名文件或文件夹

语法：

fs.rename(oldPath, newPath, callback)

fs.renameSync(oldPath, newPath)

参数说明：

- oldPath	文件当前的路径
- newPath	文件新的路径
- callback	操作后的回调

使用rename进行更改文件名和文件位置

```js
// 1.
const fs = require('fs');

// 2. 调用 rename 方法

// 文件的重命名
fs.rename('./座右铭.txt', './论语.txt', err => {
    if(err){
        console.log('操作失败');
        return;
    }
    console.log('操作成功');
});

// 文件的移动
// 将当前文件夹的data.txt移动到资料文件夹下
fs.rename('./data.txt', './../资料/data.txt', err => {
    if(err){
        console.log('操作失败');
        return;
    }
    console.log('操作成功');
});
```

### 文件删除

在Node.js中，我们可以使用unlink和unlinkSync来删除文件

语法：

fs.unlink(path, callback)

fs.unlinkSync(path)

参数说明：

- path	文件路径
- callback	操作后的回调

代码示例

```js
// 1. 
const fs = require('fs');

// 2. 调用unlink方法
fs.unlink('./观书有感.txt', err => {
    if(err){
        console.log('删除失败');
        return;
    }
    console.log('删除成功');
});
```

此外，还可以调用 rm 方法删除，该方法也有对应的同步方法	rmSync

```js
// 调用 rm 方法(14.4+)
fs.rm('论语.txt', err => {
    if(err){
        console.log('删除失败');
        return;
    }
    console.log('删除成功');
});
```

### 文件夹操作

对文件夹进行创建、读取和删除

| 方法                | 说明       |
| ------------------- | ---------- |
| mkdir/mkdirSync     | 创建文件夹 |
| readdir/readdirSync | 读取文件夹 |
| rmdir/rmdirSync     | 删除文件夹 |

#### 1. mkdir创建文件夹

语法：

fs.mkdir(path[, options], callback)

 fs.mkdirSync(path[, options], callback)

参数说明：

- path	文件夹路径
- options	选项配置
- callback	回调函数

代码示例：

```js
// 1. 导入 fs 模块
const fs = require('fs');

// 2. 创建文件夹
fs.mkdir('./html', err => {
    if(err){
        console.log('创建失败');
        return;
    }
    console.log('创建成功');
});

// 2.2 递归创建 创建 a -> a中创建b -> b中创建c
fs.mkdir('./a/b/c', {recursive: true}, err => {
    if(err){
        console.log('创建失败');
        return;
    }
    console.log('创建成功');
});
```

#### 2. readdir读取文件夹

```js
// 2-3 读取文件夹 使用方法和mkdir一样，但是回调函数传递两个参数，分别是错误信息和读取的内容
fs.readdir('./a', (err, data) => {
    if(err){
        console.log('读取失败');
        return;
    }
    console.log(data);
});

>>> [ 'b' ]
```

#### 3. rmdir删除文件夹

```js
// // 2-4 删除文件夹
// fs.rmdir('./html', err => {
//     if(err){
//         console.log('删除失败');
//         return;
//     }
//     console.log('删除成功');    
// });

// 递归删除
// 当该文件夹下有其他内容时候，无法直接删除文件夹

// // 方法一 不建议
// fs.rmdir('./a', {recursive: true}, err => {
//     if(err){
//         console.log('删除失败');
//         return;
//     }
//     console.log('删除成功');    
// });

// 方法二
fs.rm('./a', {recursive: true}, err => {
    if(err){
        console.log('删除失败');
        return;
    }
    console.log('删除成功');    
});
```

### 查看资源状态

使用stat来查看文件的状态

语法：fs.stat(path, callback)

代码示例

```js
const fs = require('fs');

fs.stat('../资料/图片1.jpg', (err, data) => {
    if(err){
        console.log('操作失败');
    }
    console.log(data);

    // // 判断是否是文件
    // console.log(data.isFile());

    // // 判断是否是文件夹
    // console.log(data.isDirectory());
});

>>> 返回文件的状态信息，例如创建日期，大小等
```

### 相对路径和绝对路径

Node.js中的相对路径的**参照物是命令行的工作目录，而非对应文件所在的目录**

假设一个一个js文件是使用相对路径在同一级目录下创建一个文件，如果在其他文件目录下运行js文件，则会在其他文件目录下创建文件

>  如何让运行一个js文件时候，能够在给定的文件夹下创建目录，且不会受到工作目录的影响？
>
> 答：使用绝对路径

__dirname

是表示绝对路径的全局变量，代表该文件所在目录的绝对路径，与普通绝对路径`D:/Files/index.html`的区别在于，当移动该文件到其他文件夹下时，无需更路径也能在该文件夹下创建文件

以后在使用fs时候，都要选择使用__dirname的方式，避免因为工作目录而影响给定路径的定位

```js
fs.writeFileSync(__dirname + './index.html', 'love');
```

### 使用fs批量重命名

文件名格式`数字-文件名.文件扩展名`

自动排序 + 补零

```js
const fs = require('fs');

const files = fs.readdirSync('./code');

files.forEach((item, index, arr) => {
    // 获取总共的文件数的位数
    let count = Math.floor((arr.length).toString().length);
    console.log(count);

    // 判断前面的数字，如果是一位数就加count个0，两位数就不变
    let num = index + 1;
    let name = item.match(/\-.*/i)[0]
    if(num < 10){
        num = '0' + num;
    }
    // 创建新的文件名
    let newFileName = num + name;

    // 重命名 
    fs.renameSync('./code/' + item, './code/' + newFileName);
    
});
```

### path模块

| API           | 说明                     |
| ------------- | ------------------------ |
| path.resolve  | 拼接规范的绝对路径`常用` |
| path.sep      | 获取操作系统的路径分隔符 |
| path.parse    | 解析路径并返回对象       |
| path.basename | 获取路径的基础名称       |
| path.dirname  | 获取路径的目录名         |
| path.extname  | 获得路径扩展名           |

代码示例

```js
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
```

------



## 三、HTTP协议

查看HTTP报文的内容，需要安装对应的软件，这里我们选择使用`fiddler`

[Fiddler4 (telerik.com)](https://www.telerik.com/download/fiddler/fiddler4)

### 请求报文结构

![请求](./images/%E8%AF%B7%E6%B1%82.png)

#### 1. 请求行

```
GET https://www.baidu.com/HTTP/1.1
请求方法 URL/HTTP/版本号
```

##### 1.1 请求方法

| 方法      | 作用             |
| --------- | ---------------- |
| GET       | 主要用于获取数据 |
| POST      | 主要用于新增数据 |
| PUT/PATCH | 主要用于更新数据 |
| DELETE    | 主要用于删除数据 |

##### 1.2 URL

```
https://www.baidu.com
协议名称://主机名
```

```
https://search.jd.com:443/search?keyword=oneplus&psort=3
协议名://主机名:端口号/路径?查询字符串
```

##### 1.3 版本号

| 版本号 | 发布时间 |
| ------ | -------- |
| 1.0    | 1996     |
| 1.1    | 1999     |
| 2      | 2015     |
| 3      | 2018     |

#### 2. 请求头

请求头中的内容以`键名:键值`的方式表达数据

```
Host: www.baidu.com
Connection:keep-alive
Upgrade-Insecure-Requests:1
User-Agent:Mozilla/5.0(Windows NT 10.0: Win64: x64)chrome/108.0.0.0Accept: text/html,application/xhtml+xml,application/xml;q=0.9
Sec-Fetch-Site:none
Sec-Fetch-Mode:navigate
Sec-Fetch-User:?1
Sec-Fetch-Dest:documentsec-ch-ua: "Not?A Brand";v="8","chromium";v="108","Google chrome";v="108'sec-ch-ua-mobile:?0
sec-ch-ua-platform:"Windows"
Accept-Encoding:gzip,deflate,br
Accept-Language:zh-CN,zh;q=0.9,en;q=0.8,la;q=0.7
CoOkie:BIDUPSID=106A974BAB5BA0458E81F18CBEA96E52:PSTM=1669267573;BD UPN=12314753
```

具体查看请求头的含义

[HTTP 标头（header） - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers)

#### 3. 请求体

请求体的内容可以是任意格式

例如某个网站post请求提交的账号密码格式，是查询字符串结构

```
login_emai1=779498590%4099.com&login_password=zDAZn2w76CucPzD&type=account_login
```

也可以是json格式

```
{"ev_type" :"batch","list": [{"ev_type":"pageview","payload": {"pid":"index","sou":1}]}
```

也可以是其他的形式

### 响应报文结构

发起请求后，服务器会返回一个响应报文，响应报文的格式与请求报文基本一致

![响应](./images/%E5%93%8D%E5%BA%94.png)

#### 1. 响应行

```
HTTP/1.1	200		OK
版本号		响应状态码		
```

##### 1.1 响应状态码

| 状态码 | 含义           |
| ------ | -------------- |
| 200    | 请求成功       |
| 403    | 禁止请求       |
| 404    | 找不到资源     |
| 500    | 服务器内部错误 |

##### 1.2 响应状态描述

| 状态码 | 状态描述              |
| ------ | --------------------- |
| 200    | OK                    |
| 403    | Forbidden             |
| 404    | Not Found             |
| 500    | Internal Server Error |

状态码查询

[HTTP 响应状态码 - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)

#### 2. 响应头

响应头记录与服务器相关的一些内容

#### 3. 响应体

与请求体相似，内容格式非常灵活，常见的响应体格式有

1. HTML
2. CSS
3. JS
4. 图片
5. 视频
6. JSON

### http模块

#### 1. 创建http服务

```js
// 1. 导入HTTP模块
const http = require('http');

// 2. 创建服务对象  接受一个回调函数，接受两个实参分别是请求对象，封装请求报文和响应对象，封装响应报文
const server = http.createServer((request, response)=>{
    // 当服务接收到http请求的时候，就会执行，即发送和接受的时候
    response.end('Hello HTTP Server'); // 设置响应体
});

// 3. 监听端口，启动服务
server.listen(9000, ()=>{
    // 当服务启动成功后执行回调函数
    console.log('服务已经启动');
});
```

#### 2. 创建服务注意事项

1. 命令行`ctrl + c`停止服务
2. 服务启动后，更新代码必须重启服务才能生效
3. 相应内容中文乱码的解决办法

```js
response.setHeader('content-type', 'text/html;charset=utf-8');
```

4. 端口号被占用

```
Error: listen EADDRINUSE: address already in use :::9000
```

​	1）关闭当前正在运行监听端口的服务

​	2）修改其他端口号

5. HTTP协议默认端口是80，不设置端口时候默认访问80端口，HTTP服务开发常用端口有3000，8000，8090，9000等

   HTTPS协议的默认端口是443

> 如果端口被其他应用程序占据，可以使用资源监视器找到占用端口的程序，然后使用任务管理器关闭对应的程序

#### 3. 浏览器查看HTTP报文

在浏览器的开发者工具中，点击network可以查看请求头和响应头

#### 4. 获取HTTP请求报文

想要获取请求的数据，需要通过request对象

| 含义          | 语法                                          | 重点掌握 |
| ------------- | --------------------------------------------- | -------- |
| 请求方法      | request.method                                | *        |
| 请求版本      | request.httpVersion                           |          |
| 请求路径      | request.url                                   | *        |
| URL路径       | require('url').prase(request.url).pathname    | *        |
| URL查询字符串 | require('url').prase(request.url, true).query | *        |
| 请求头        | request.headers                               | *        |
| 请求体        | request.on('data', function(chunk){})         |          |
|               | request.on('end', function(){})               |          |

对应获取除请求体以外请求的代码

```js
// 1. 导入HTTP模块
const http = require('http');

// 2. 创建服务对象  接受一个回调函数，接受两个实参分别是请求对象，封装请求报文和响应对象，封装响应报文
const server = http.createServer((request, response)=>{
    // 当服务接收到http请求的时候，就会执行，即发送和接受的时候
    response.setHeader('content-type', 'text/html;charset=utf-8');

    // 获取请求的方法
    // console.log(request.method);

    // 获取请求的url
    // console.log(request.url); // 只包含url中的路径与查询字符串

    // 获取http协议的版本号
    // console.log(request.httpVersion);

    // 获取http的请求头
    // console.log(request.headers);

    // 获取请求头中的host
    console.log(request.headers.host);

    
    response.end('Hello HTTP Server'); // 设置响应体
});

// 3. 监听端口，启动服务
server.listen(9000, ()=>{
    // 当服务启动成功后执行回调函数
    console.log('服务已经启动');
});
```

获取请求体的代码

```js
const http = require('http');

const server = http.createServer((request, response)=>{
    response.setHeader('content-type', 'text/html;charset=utf-8');
	response.end('Hello HTTP Server');
    
    // 要获取请求体，需要以下步骤
    // 1. 声明一个变量
    let body = '';

    // 2. 绑定data事件 请求体本身也可以作为流式读取的对象
    request.on('data', chunk => {
        body += chunk; // chunk本身是一个buffer
    });

    // 3. 绑定一个end事件 读取完毕后执行的操作
    request.on('end', () => {
        console.log(body); // 注意：默认情况下，get请求的请求体一般都是空的
    });
});

server.listen(9000, ()=>{
    console.log('服务已经启动');
});
```

#### 5. 提取URL中的路径以及查询字符串

```js
const http = require('http');

const url = require('url');

const server = http.createServer((request, response)=>{
    response.end('URL and Search String');

    // 实例化 URL 的对象
    // let url = new URL('http://127.0.0.1:9000/search?name=Li%20Ming&age=14'); // URL对象，host、protocal等以关键字存在
    
    // 使用 request.url 拼接路径
    let url = new URL(request.url, 'http://127.0.0.1:9000'); // request.url 不包含协议名，主机名和端口号
    
    // 输出路径
    // console.log(url.pathname);

    // 输出查询字符串，使用URL对象中的searchParams
    console.log(url.searchParams.get('name')); // 使用get来获取查询字符串中的值

});

server.listen(9000, ()=>{
    console.log('服务已经启动');
});
```

更多关于URL对象：[url 网址 | Node.js v20 文档 (nodejs.cn)](https://nodejs.cn/api/url.html)

#### 练习：HTTP请求

搭建一个HTTP服务

| 请求类型 | 请求地址 | 响应体结果 |
| -------- | -------- | ---------- |
| get      | /login   | 登陆页面   |
| get      | /reg     | 注册界面   |

```js
const http = require('http');

const server = http.createServer((request, response)=>{
    response.setHeader('content-type', 'text/html;charset=utf-8');
    
    // 获取请求的方法 使用解构赋值的方法
    let {method} = request;

    // 获取请求的url路径 使用解构赋值的方法
    let {pathname} = new URL(request.url, 'http://127.0.0.1:9000');

    if(pathname === '/login' && method === 'GET'){
        response.end('登录页面');
        return;
    }
    if(pathname === '/reg' && method === 'GET'){ // register 注册
        response.end('注册页面');
        return;
    }
    response.end('来到了没有知识的荒原~');
});

server.listen(9000, ()=>{
    console.log('服务已经启动');
});
```

#### 6. 设置HTTP响应报文

| 作用             | 语法                               |
| ---------------- | ---------------------------------- |
| 设置响应状态码   | response.statusCode                |
| 设置响应状态描述 | response.statusMessage             |
| 设置响应头信息   | response.setHeader('头名', '头值') |
| 设置响应体       | response.write('xxx')              |
|                  | response.end('yyy');               |

#### 练习：HTTP响应

搭建http服务，响应一个4行3列的表格，并且要求表格有隔行换色效果，且点击单元格可以高亮显示

```js
const http = require('http');

const server = http.createServer((request, response)=>{
    response.setHeader('content-type', 'text/html;charset=utf-8');
    response.write(`
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <title>09-HTTP响应练习</title>
        <style>
            td{
                width:50px;
                height:50px;
                padding:20px 40px;
                text-align:center;
                cursor:default;
                box-shadow: 0;
                transition: 0.3s linear all;
            }
            td:hover {
                box-shadow: 0 0 30px greenyellow inset;
            }
            tr:nth-child(2n){
                background-color:#66666688;
            }
            tr:nth-child(2n-1){
                background-color:#00000033;
            }
        </style>
    </head>
    <body>
        <table border=1 cellspacing=0>
        <tr>
            <td>abc</td>
            <td>abc</td>
            <td>abc</td>
        </tr>
        <tr>
            <td>abc</td>
            <td>abc</td>
            <td>abc</td>
        </tr>
        <tr>
            <td>abc</td>
            <td>abc</td>
            <td>abc</td>
        </tr>
        <tr>
            <td>abc</td>
            <td>abc</td>
            <td>abc</td>
        </tr>
        </table>
    
        <script>
            let tdList = document.querySelectorAll("td");
            for(let i=0;i<tdList.length;i++){
                tdList[i].onclick = function(){
                    this.style.border = "1px solid yellow";
                    this.style.backgroundColor = "#ffff0099";
                    for(let i=0;i<tdList.length;i++){
                        if(tdList[i] != this){
                            tdList[i].style = "";
                        }
                    }
                };
            }
        </script>    
    </body>
    </html>
    `);
    response.end();
});

server.listen(9000, ()=>{
    console.log('服务已经启动');
});
```

#### 练习：HTTP响应2

在上一节练习中，如果需要返回html内容，需要在js中写html，是否可以避免这一点？

答：使用fs模块

```js
const http = require('http');
const fs = require('fs'); 

const server = http.createServer((request, response)=>{
    response.setHeader('content-type', 'text/html;charset=utf-8');
    // 使用fs模块读取html文件的内容，然后放入响应体中
    let responseHtml = fs.readFileSync(__dirname + '/文档/10-table.html');

    response.end(responseHtml); // end可以接受buffer作为参数
});

server.listen(9000, ()=>{
    console.log('服务已经启动');
});
```

但是如果使用这种方式，则html无法向服务器请求js和css文件，因为请求的结果都会以table.html作为结果返回

```js
const http = require('http');
const fs = require('fs'); 

// 当html中导入css和js时候，使用优化中的方法无法响应正确的html内容
const server = http.createServer((request, response)=>{
    // 当第一次返回的html中请求对应的css和js内容时候，服务器也会返回responseHtml，因此样式无法正常获取
    // response.setHeader('content-type', 'text/html;charset=utf-8');
    // 调整回调函数，根据路径响应对应的结果，而不是绑定某个特定的文件
    // 1. 获取请求的url路径
    let {pathname} = new URL(request.url, 'http://127.0.0.1:9000');
    var responseFile;
    if(pathname === "/"){
        responseFile = fs.readFileSync(__dirname + '/文档2/10-table.html');     
    }else if(/.ico/.test(pathname)){
        responseFile = null;
    }else{
        responseFile = fs.readFileSync(__dirname + '/文档2' + pathname);     
    }
    response.end(responseFile);
    
});

server.listen(9000, ()=>{
    console.log('服务已经启动');
});
```

### 静态资源

#### 1. 静态资源简介

静态资源是指内容长时间不发生改变的资源，例如图片，视频，CSS，JS，HTML，字体文件等

动态资源是指内容经常更新的资源，例如百度首页，网易首页，京东搜索列表页面等

#### 2. 搭建静态服务

```js
/**
 * 创建一个HTTP服务，端口为 9000 ，满足如下需求
 * GET /index.html      响应page/index.html
 * GET /css/app.css     响应page/css/app.css
 * GET /image/logo.png  响应page/images/logo.png
 */

const http = require('http');
const fs = require('fs');
const { escape } = require('querystring');

const server = http.createServer((request, response)=>{
    let {pathname} = new URL(request.url, 'http://127.0.0.1:9000');
    
    if(pathname === '/'){
        // 根路径 返回index.html
        // 读取文件 fs异步api
        fs.readFile(__dirname + '/index.html', (err, data)=>{
            if(err){
                response.setHeader('content-type', 'text/html;charset=utf-8');
                response.statusCode = 500;
                response.end('文件读取失败');
                return;
            }
            // 响应文件内容
            response.end(data);
        });
    }else{
        // 拼接文件路径
        let filePath = __dirname + '/page' + pathname;

        // 读取文件 fs异步api
        fs.readFile(filePath, (err, data)=>{
            if(err){
                response.statusCode = 500;
                response.end('文件读取失败');
                return;
            }
            // 响应文件内容
            response.end(data);
        });        
    }
});
server.listen(9000, ()=>{
    console.log('服务器已启动...');
});
```

#### 3. 网站根目录或静态资源目录

HTTP服务在哪个文件夹中寻找静态资源，那个文件夹就是静态资源目录，也称为网站根目录

在上述构建的网站中，根目录就是/page文件夹下的内容

因此可以声明一个变量保存根目录，后续的内容只需要在根目录基础上拼接pathname即可

```js
let root = __dirname + '/page';

// 之后获取路径直接拼接root和pathname即可
let filePath = root + pathname;
```

#### 4. 网页当中的URL

网页中的URL主要分为两大类：相对路径和绝对路径

##### 4.1 绝对路径

绝对路径可靠性强且容易理解

| 形式                   | 特点                                                         |
| ---------------------- | ------------------------------------------------------------ |
| http://atguigu.com/web | 直接向目标资源发送请求，容易理解。网站的外链会用到此形式     |
| /atguigu.com/web       | 与页面URL的协议拼接形成完整URL再发送请求。大型王章使用较多   |
| /web                   | 与页面URL的协议名、主机名、端口拼接形成完整URL再发送请求。中小网站（**最常用**） |

##### 4.2 相对路径

使用相对路径时候要先与当前页面的URL进行计算，得到完整URL后再发送请求

例如，当前网页的url为http://www.atguigu.com/course/h5.html

| 形式               | 最终URL                                                      |
| ------------------ | ------------------------------------------------------------ |
| ./css/app.css      | http://www.atguigu.com/course/css/app.css                    |
| js/app.js          | http://www.atguigu.com/course/js/app.js                      |
| ../img/logo.png    | http://www.atguigu.com/img/logo.png                          |
| ../../mp4/show.mp4 | http://www.atguigu.com/mp4/show.mp4（到达最外层后即停止，不会继续向上一级寻找） |

#### 5. 设置资源类型（MIME类型）

媒体类型，通常称为MIME类型，是一种标准，用来表示文档、文件或者字节流的性质和格式

```
mime 类型结构：[type]/[subType] ([主类型]/[子类型])
例如：text/html text/css image/jpeg image/png application/json
```

HTTP服务可以设置响应头的Content-Type来表明响应体的MIME类型，浏览器会根据该类型决定如何处理资源

```js
const mime = {
    html:'text/html',
    css:'text/css',
    js:'text/javascript',
    png:'image/png',jpg:'image/jpeg',
    gif:'image/gif',
    mp4:'video/mp4',
    mp3:'audio/mpeg',
    json:'application/json'
}
```

根据请求文件的后缀，设置对应的type值

```js
// 获取文件后缀名
let ext = path.extname(filePath).slice(1);
let type = mime[ext];
if(type){
    // 如果获取到值 
    response.setHeader('content-type', type);
}else{
    // 如果没有匹配到
    response.setHeader('content-type', 'application/octet-stream');
}
```

#### 6. 乱码问题

在响应头的content-type中添加编码格式为utf-8即可

```js
// 获取文件后缀名
let ext = path.extname(filePath).slice(1);
let type = mime[ext];
if(type){
    // 如果获取到值 
    response.setHeader('content-type', type + ';charset=utf-8');
}else{
    // 如果没有匹配到
    response.setHeader('content-type', 'application/octet-stream;charset=utf-8');

}
```

html中的meta中也可以设置编码格式，**但是响应头中的charset优先级更高**

其实不设置响应头中的字符集也不会影响，因为当网页加载对应的css或者js文件时候，会自动使用utf-8解析里面的内容，所以虽然加载文件中有乱码，但不会影响最终的呈现效果

#### 7. 完善错误处理

```js
switch(err){
    case 'ENOENT':
        response.statusCode = 404;
        response.end('找不到内容');
        return;
    case 'EPERM':
        response.statusCode = 403;
        response.end('您无权访问此页面');
        return;
    default:
        response.statusCode = 500;
        response.end('内部错误！');
}
```

#### 8. GET和POST的区别

- GET主要用于获取数据，POST主要用于提交数据

- GET参数在URL之后，POST参数在请求体中，GET一般请求体为空

- POST相对GET更安全一些

+ GET请求大小有限制，小于2K，POST没有

------



## 四、Node.js模块化

### 介绍

#### 1. 什么是模块化，什么是模块？

将一个复杂程序文件一句一定规则拆分为多个文件的过程称为模块化

拆分出的每一个文件就是一个模块，模块内部数据是私有的，不过模块可以暴露内部数据以便于其他模块使用

#### 2. 什么是模块化项目

编码时候按照模块一个一个编码

#### 3. 模块化好处

1. 防止命名冲突
2. 高复用性
3. 高维护性

### 模块化

#### 1. 模块暴露数据

模块暴露数据的方式有两种：

1. module.exports = value

```js
// 声明一个函数
function declareName(){
    console.log('my name is xxx');
}
function calcNumer(a, b){
    return a + b;
}

// 暴露数据
// module.exports = {
//     declareName: declareName,
//     calcNumer: calcNumer
// };

// 上述可以简写为
module.exports = {
    declareName,
    calcNumer
};
```

```js
// 导入模块
const me = require('./me.js');

console.log(me.calcNumer(11, 7));
```

1. exports.name = value

```js
// exports 暴露数据
exports.declareName = declareName;
exports.calcNumer = calcNumer;
```

> 使用时有几点注意：
>
> - module.exports 可以暴露**任意**数据
>
> - 不能跳过name使用 exports = value形式暴露数据，模块内部module和exports的隐式关系 exports = module.exports = {}
>
>   即 module.exports 和 exports的本质都是一个空对象，使用require调用的是module中的exports对象，并不是exports的值
>
>   换句话说，exports是module.exports的一个引用，读取exports会默认读取module.exports，所以如果对exports进行赋值，则会重新引用exports的内容，即exports将不再指向module.exports

#### 2. Node.js导入模块

在模块中使用require传入文件路径即可引入文件

```js
const me = require('./me.js');
```

require使用的一些注意事项

1. 对于自己使用的模块，导入时候使用相对路径（不会受到工作目录影响），并且./和../都是不可以省略的

2. 对于js和json文件可以省略后缀，同名时候先导入js文件

3. 导入其他文件，会以js文件处理

4. 如果导入的是**文件夹**，则先检测文件夹下的`package.json`文件中的`main`属性对应的文件，存在则导入，不存在则报错、

   ```json
   {
       "main": "./app.js"
   }
   ```

​	如果没有main属性，则尝试导入index.js和index.json，如果也没有则报错

5. 导入node.js内置模块无需添加相对路路径

**require执行的过程（仅针对自定义模块）**

> 1. 将相对路径转化为绝对路径
> 2. 检测缓存中是否含有该模块，有则直接返回，否则继续
> 3. 读取模块的内容
> 4. 将模块的内容包裹为一个函数并执行
> 5. 缓存这个模块
> 6. 返回module.exports的值

#### 3. CommonJS模块化规范

`module.exports`、`exports`、`require`这些都是`CommonJS`模块化规范中的内容

而Node.js是实现了CommonJS模块化规范，二者关系类似JS和ECMAScript

------



## 五、包管理工具

### 基本概念

#### 1. 包是什么

包，即package，代表一组特定功能的源码合集

#### 2. 包管理工具

管理包的应用软件，可以对包进行下载安装、更新、删除、上传等操作

借助包管理工具，可以快速开发项目，提升效率

包管理工具是一个通用的概念，很多编程语言都有包管理工具，所以掌握它非常重要

#### 3. 常用的包管理工具

**npm**

### npm

npm全程`Node Package Manager`，即Node的包管理工具

npm是node.js的官方内置包管理工具，是必须要掌握的工具

#### 1. npm的安装

node.js下载默认自带有npm，所以可以直接使用无需安装

可以使用`npm -v`查看版本号测试

```cmd
C:\Users\Gin49SZ>npm -v
10.5.0
```

#### 2. npm初始化包

创建一个空目录，然后以此目录为工作目录，启动命令行工具，执行`npm init`

```cmd
C:\Users\Gin49SZ\Desktop\Study\前端开发\Node.js\Node.js实例\模块化\05-npm>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (05-npm)
```

创建是采用交互式，依次设置包的名称，版本，描述，main的属性值等后就会自动创建一个npm包

package.json是包的配置文件，每个包都必须要有一个package.json

package.json内容示例

```json
{
  "name": "test",
  "version": "1.0.0",
  "description": "studyForNpm",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

> 初始化中的注意事项：
>
> 1. 包名不可以有中文和大写字母，文件夹也最好不要有中文
> 2. version必须以x.x.x的形式定义
> 3. package.json可以手动创建与修改
> 4. 使用`npm init -y`或者`npm init --yes`极速创建`package.json`

#### 3. npm搜索包

搜索包的方式有两种

1. 命令行`npm s 搜索关键字`

   ```cmd
   C:\Users\Gin49SZ>npm s math
   ```

2. 网站搜索[npm | Home (npmjs.com)](https://www.npmjs.com/)

#### 4. npm下载安装包

我们可以通过`npm install`和`npm i`命令安装包

```
# 格式
npm install <包名>
npm i <包名>


# 示例
npm install uniq
npm i uniq
```

安装步骤：

1. 在指定的包（含有json的文件夹）下打开终端
2. 输入`npm i 包名`，敲回车

安装完毕之后在文件夹下会新增两个资源：

- `node_modules 文件夹`存放下载的包
- `package-lock.json 包的锁文件`，用来锁定包的版本

> 安装之后，安装的包就是当前所在的包的一个依赖包，简称为依赖
>
> 例如：创建A包，在A包中安装了B包，则B就是A的一个依赖包，也会说A依赖B

#### 5. require导入npm包的基本流程

1. 在当前文件夹下node_modules中寻找同名的文件夹，如果没有，执行2
2. 在上一级目录下的node_modules中寻找同名的文件夹，如果没有，重复2直到磁盘根目录

#### 6. 生产环境和开发环境

开发环境是程序员专门用来写代码的环境，一般指程序员的电脑

生产环境是项目代码正式运行的环境，一般指正式的服务器电脑

#### 7. 生产依赖与开发依赖

生产依赖是指这个包开发和正式上线都需要用，例如jQuery

开发依赖是指这个包仅在开发阶段需要，例如一些格式化，或者转换代码的包

| 类型     | 命令          | 补充                                                         |
| -------- | ------------- | ------------------------------------------------------------ |
| 生产依赖 | npm i -S uniq | -S等效于--save，**-S是默认选项**<br />包的信息都保存在package.json中的`dependencies`属性 |
| 开发依赖 | npm i -D less | -D等效于--save-dev<br />包的信息都保存在package.json中`devDependencies`属性 |

#### 8. npm全局安装

可以使用`-g`进行全局安装

```
npm i -g nodemon
```

全局安装完成之后就可以在命令行的任何位置运行`nodemon`命令，该命令的作用是`自动重启node应用程序`，类似Flask开启debug模式

nodemon全局安装完毕后，可以在任意一个位置使用nodemon代替node，会自动监听文件，内容一保存就会重启服务器

**全局安装与局部的不同之处：**

- 全局安装无需使用require导入包，全局安装的包会暴露一个全局的命令，在命令行中使用

- 局部安装包在文件夹下，全局安装包在默认的global文件夹下，可以使用`npm root -g`查看路径，一般默认是在AppData下的Roaming中
- 不是所有的包都适合全局安装，根据文档调整

#### 9. 修改windows执行策略

在执行nodemon时候可能会出现系统禁止脚本运行的问题

```cmd
nodemon : 无法加载文件 C:\Users\Gin49SZ\AppData\Roaming\npm\nodemon.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。
所在位置 行:1 字符: 1
+ nodemon .\10-HTTP响应练习-扩展.js
+ ~~~~~~~
    + CategoryInfo          : SecurityError: (:) []，PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```

因此需要修改windows的执行策略

1. 以管理员身份打开PowerShell
2. 键入命令行`set-ExecutionPolicy remoteSigned`
3. 输入A选择全是

也可以修改运行的终端，点击终端中的下拉框，选择默认配置文件，选择Command Prompt，然后重新在集成终端中打开，然后运行`nodemon 文件名.js`，就不会报错了

#### 10. 环境变量Path

在含有可执行程序的文件夹下打开终端，输入名称会自动寻找当前文件夹下的可执行程序或者.cmd文件然后运行，但如果想要在任意一个文件夹下都可以运行这个文件，可是通过配置用户环境变量进行设置

设置 -> 高级系统设置 -> 环境变量 -> 用户变量 -> 双击打开 -> 新建后添加想要配置的文件夹目录 -> 确定

之后则可以在任意一个位置运行这个应用程序

#### 11. npm安装包的所有依赖

在项目协作中有一个常用的命令就是`npm i`，该命令可以查看项目下的json文件并安装所有的依赖

也就是说，通过`npm i`指令，多个PC之间仅通过json文件就可以保证一致的运行环境，减少传递的项目大小

#### 12. npm安装指定版本的包

安装指定版本

```
## 格式
npm i <包名@版本号>

## 示例
npm i jquery@1.11.2
```

#### 13. npm删除包

删除包分为局部删除和全局删除

```
## 局部删除
npm remove uniq

## 全局删除
npm remove -g nodemon
```

#### 14. npm配置命令别名

通过配置别名，可以更简单地执行命令

例如可以在package.json中进行如下配置，此处的server为别名，可以是任意

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "server": "node ./03-http.js"
```

之后在该文件夹下的任意终端中使用

```
npm run server
```

就会自动执行上述的命令`node ./03-http.js`

此外，添加以`start`作为别名时，可以不省略`run`

```json
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "server": "node ./03-http.js",
     "start": "node ./03-http.js"
```

```
npm start
```

### cnpm

#### 1. 介绍

cnpm是淘宝构建的npmjs.com的完整镜像，网址为https://npmmirror.com/

#### 2. 安装

可以通过npm来安装cnpm工具

```
npm install -g cnpm --registry=https://registry.npmmirror.com
```

#### 3. 操作命令

与npm基本类似，只是将npm换为cnpm即可，下面以uniq作为例子进行命令介绍

| 功能         | 命令                                                         |
| ------------ | ------------------------------------------------------------ |
| 初始化       | cnpm init                                                    |
| 安装包       | cnpm i uniq<br />cnpm i -S uniq<br />cnpm i _D uniq<br />cnpm i -g nodemon |
| 安装项目依赖 | cnpm i                                                       |
| 删除         | cnpm r uniq                                                  |

#### 4. npm配置淘宝镜像

也可以使用npm配置淘宝镜像，方法有两种

- 直接配置
- 工具配置

##### 4.1 直接配置

执行如下命令即可完成配置

```
npm config set registry https://registry.npmmirror.com/
```

##### 4.2 工具配置

使用nrm配置npm的镜像地址 `npm registry manager`，专门用于管理npm地址的插件

1. 安装nrm

   ```
   npm i -g nrm
   ```

2. 修改镜像

   ```
   nrm use taobao
   ```

3. 检查是否配置成功

   ```
   nrm config list
   ```

   检查registry地址是否为` https://registry.npmmirror.com/`，是则表示成功

   > C:\Users\Gin49SZ>npm config list
   > ; "builtin" config from C:\Program Files\nodejs\node_modules\npm\npmrc
   >
   > prefix = "C:\\Users\\Gin49SZ\\AppData\\Roaming\\npm"
   >
   > ; "user" config from C:\Users\Gin49SZ\.npmrc
   >
   > home = "https://npmmirror.com"
   > registry = "https://registry.npmmirror.com/"
   >
   > ; node bin location = C:\Program Files\nodejs\node.exe
   > ; node version = v20.12.2
   > ; npm local prefix = C:\Users\Gin49SZ
   > ; npm version = 10.5.0
   > ; cwd = C:\Users\Gin49SZ
   > ; HOME = C:\Users\Gin49SZ
   > ; Run `npm config ls -l` to show all defaults.

> 此外，使用nrm可以快速切换下载插件的地址，在cmd使用`nrm ls`
>
> 可以查看允许使用的npm镜像地址
>
> 使用`nrm use npm`即可切换到源npm，这样的好处是可以在下载包和上传包之间来回切换（镜像网站不支持上传包）

### yarn

#### 1. yarn介绍

yarn是由Facebook在2016年推出的新JavaScript包管理工具，官方网址：https://yarnpkg.com/

#### 2. yarn的特点

yarn官方宣称的一些特点

- 速度超快：yarn缓存每个下载过的包，在本地其他文件夹下克隆包时候无需下载
- 安全：验证包完整性
- 可靠：使用详细、简介的所文件格式和明确的安装算法

#### 3. yarn的安装

可以使用npm来安装yarn

```
npm i -g yarn
```

#### 4. yarn的常用命令

yarn的功能与npm基本一致，下面仍旧以uniq为例子

| 功能         | 命令                                                         |
| ------------ | ------------------------------------------------------------ |
| 初始化       | yarn init / yarn init -y                                     |
| 安装包       | yarn add uniq 生产依赖<br />yarn add less --dev 开发依赖<br />yarn global add  nodemon 全局安装（全局安装要重新配置Path） |
| 删除包       | yarn remove uniq 删除项目安装包<br />yarn global remove nodemon 全局删除安装包 |
| 安装项目依赖 | yarn（根据json文件安装对应的环境）                           |
| 运行命令别名 | yarn <别名> （无需添加run）                                  |

### npm和yarn的选择

yarn也可以配置淘宝镜像

```
yarn config set registry https://registry.npmmirror.com/
```

通过`yarn config list`查看yarn的配置项

npm和yarn的选择

1. 个人项目：随意
2. 公司项目：根据锁文件`package-lock.json`、`yarn.lock`

一个项目最好只使用一个包管理工具

### npm发布一个包

#### 1. 创建与发布

1. 创建文件夹，并闯进文件index，在该文件中声明函数，使用module.exports暴露
2. npm初始化工具包，在package.json中填写包的信息
3. 注册账号 https://www.npmjs.com/signup
4. 激活账号
5. 修改镜像为官方源`nrm use npm`
6. `npm login`填写用户信息
7. `npm publish`提交包

#### 2. 更新和删除包

1. 更新包中的代码

2. 测试代码是否可用

3. 修改`package.json`中的版本号

4. 发布更新

   ```
   npm publish
   ```

#### 3. 删除包

执行如下命令删除家

```
npm unpublish
```

### 包管理工具扩展内容

在很多语言中都有包管理工具

| 语言   | 包管理工具          |
| ------ | ------------------- |
| php    | composer            |
| python | pip                 |
| java   | maven               |
| go     | go mod              |
| JS     | npm/yarn/cnpm/other |
| ruby   | rubyGems            |

包括操作系统也有包管理工具，例如windows可以使用`choc install tencentqq`来安装QQ，但与上述语言的不同的是，此处安装的是一个软件

### nvm介绍与使用

#### 1. nvm介绍

nvm全程`Node Version Manager`，即用于管理Node.js的版本的工具，方便切换不同的Node.js

#### 2. nvm使用

使用方法类似npm类似

##### 2.1 下载安装

下载nvm，下载地址：[Releases · coreybutler/nvm-windows (github.com)](https://github.com/coreybutler/nvm-windows/releases)，

选择`nvm-setup.exe`下载即可

##### 2.2 常用命令

| 命令                  | 说明                          |
| --------------------- | ----------------------------- |
| nvm list available    | 显示所有可以下载的Node.js版本 |
| nvm list              | 显示已安装的版本              |
| nvm install 18.12.1   | 安装18.12.1版本的Node.js      |
| nvm install latest    | 安装最新版的Node.js           |
| nvm uninstall 18.12.1 | 删除某个版本的Node.js         |
| nvm use 18.12.1       | 切换18.12.1的Node.js          |

```
nvm install 18.12.1
nvm use 18.12.1
```

------



## 六、Express框架

### Express基本概念

#### 1. Express介绍

express是一个基于Node.js平台的极简、灵活的Web框架，官方网址：https://www.expressjs.com.cn/

简单来说，express是一个封装好的工具包，便于开发Web应用

#### 2. Express使用

##### 2.1 Express下载

express本身是一个npm包，可以通过npm安装

```
npm init
npm i express
```

##### 2.2 Express初体验

```js
// 1. 导入 express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由
app.get('/home', (req, res)=>{
    res.end('hello express');
});

// 4. 监听端口，启动服务
app.listen(3000, ()=>{
    console.log('服务已启动， 端口3000监听中...');
});
```

### Express路由

#### 1. 路由是什么

路由确定应用程序如何响应客户端对特定端点的请求

#### 2. 路由的使用

一个路由的组成有请求方法、路径和回调函数组成

express中提供了一系列方法，可以很方便的使用路由，使用格式如下

```
app.<method>(path, callback)
```

代码示例

```js
// 1. 导入 express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由

// get
app.get('/home', (req, res)=>{
    res.end('hello express');
});

// post
app.post('/login', (req, res)=>{
    res.end('login success');
});

// get和post
app.all('/all', (req, res)=>{
    if(req.method == 'GET'){
        res.end('use get');
    }else{
        res.end('use post');
    }
});

// 通配 当没有路径可以匹配到时候
app.all('*', (req, res)=>{
    res.end('404 Not Found');
});


// 4. 监听端口，启动服务
app.listen(3000, ()=>{
    console.log('服务已启动， 端口3000监听中...');
});
```

#### 3. 获取请求参数

express框架封装了一些API来方便获取请求报文中的数据，并且兼容原生HTTP模块的获取方式

```js
//导入 express
const express = require('express');

//创建应用对象
const app = express();

//创建路由

// get
app.get('/request', (req, res)=>{
    // 原生操作
    // console.log(req.method);
    // console.log(req.url);
    // console.log(req.httpVersion);
    // console.log(req.headers);

    // express操作
    console.log(req.path);
    console.log(req.query);
    console.log(req.ip);

    // 可以单独获取某一个请求头
    console.log(req.get('host'));

    res.end('over');
});


// 监听端口，启动服务
app.listen(3000, ()=>{
    console.log('服务已启动， 端口3000监听中...');
});
```

#### 4. 获取路由参数

```js
//导入 express
const express = require('express');

//创建应用对象
const app = express();

//创建路由

// 使用占位符 :id (冒号后面可以任意指定内容)
app.get('/:id.html', (req, res)=>{
    res.setHeader('content-type', 'text/html;charset=utf-8');

    // 获取路由参数
    var phoneid = req.params.id; // params是请求对象上面的一个属性，用来存储所有的路由参数, id是其中一个
    res.end('商品代号：'+phoneid);
});


// 监听端口，启动服务
app.listen(3000, ()=>{
    console.log('服务已启动， 端口3000监听中...');
});
```

#### 练习：返回歌手

```js
const express = require('express');

const app = express();

// 导入json文件
const {singers} = require('./singers.json');

app.get('/singer:id.html', (req, res)=>{
    res.setHeader('content-type', 'text/html;charset=utf-8');
    // 获取路由参数
    let {id} = req.params;

    // 在singers中寻找对应id的数据
    let result = singers.find(item=>{
        if(item.id == Number(id)){
            return true;
        }
    });
    if(result){
        res.end(`
        <!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>${result.singer_name}</h1>
            <img src="${result.singer_pic}"/>
        </body>
        </html>
        `);        
    }else{
        res.end("Can't find him/her");
    }

});

app.listen(3000, ()=>{
    console.log('服务已启动， 端口3000正在监听中...');
});
```

#### 5. 一般响应设置

```js
const express = require('express');

const app = express();

// 导入json文件
const {singers} = require('./singers.json');

app.get('/response', (req, res)=>{
    // 原生响应
    // res.statusCode = 404;
    // res.statusMessage = 'Cannot find';
    // res. setHeader('xxx', 'yyy');
    // res.write('hello express');
    // res.end("Cannot find");

    // express 响应
    // res.status(500);
    // res.set('aaa', 'bbb');
    // res.send('你好'); // send 在调用之后会自动设置响应格式为utf-8

    res.status(500).set('abc', 'def').send('你好'); // 使用express可以进行连贯设置（链式调用）

});

app.listen(3000, ()=>{
    console.log('服务已启动， 端口3000正在监听中...');
});
```

#### 6. 其他响应

```js
const express = require('express');

const app = express();

// 导入json文件
const {singers} = require('./singers.json');

app.get('/other', (req, res)=>{
    // 跳转响应
    // res.redirect('https://www.baidu.com');

    // 下载响应
    // res.download(__dirname + '/package.json');

    // JSON响应
    // res.json({
    //     'name': 'Li Ming',
    //     'info': 'Class 1 Grade 4'
    // });

    // 响应文件内容
    res.sendFile(__dirname + '/test.html'); // 也可以使用 path.resolve

    
});

app.listen(3000, ()=>{
    console.log('服务已启动， 端口3000正在监听中...');
});
```

#### 7. 中间件

##### 7.1 什么是中间件

`中间件（Middleware）本质是一个回调函数`

`中间件函数`可以像路由回调一样访问`请求对象(request)`和`响应对象(response)`

##### 7.2 中间件的作用

`中间件的作用`就是`使用函数封装公共操作，简化代码`

##### 7.3 中间件的类型

- 全局中间件

  ```js
  // 全局中间件使用app.use()调用
  app.use(middlewareFunction);
  ```

  ```js
  /**
   * 记录每个请求的 url 与 IP 地址
   */
  
  const express = require('express');
  const fs = require('fs');
  const path = require('path');
  
  const app = express();
  
  // 声明中间件函数
  function recordMiddleware(req, res, next){
      /**
       * req : 接受请求报文的对象
       * res : 接受响应报文的对象
       * next : 内部函数，执行之后会指向内部后续的路由回调或者中间件函数回调
       */
      
      // 获取 url 和 ip
      let {url, ip} = req;
  
      // 将信息保存在文件中
      fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip} \r\n`);  
      
      // 调用next
      next();
  }
  
  // 全局使用中间件函数
  app.use(recordMiddleware);
  
  app.get('/home', (req, res)=>{
  
      res.send('前台首页');
  });
  
  app.get('/admin', (req, res)=>{
  
      res.send('后台首页');
  });
  
  app.all('*', (req, res)=>{
      res.send('<h1>404 Not Found</h1>');
  });
  
  app.listen(3000, ()=>{
      console.log('全局中间件-服务器已启动，端口3000');
  });
  ```

  

- 路由中间件

  ```js
  // 路由中间件在每个路由中第二个参数中设置
  // 后台
  app.get('/admin', checkCodeMiddleware,(req, res)=>{
      res.send('后台首页');
  
  });
  ```

  ```js
  /**
   * 针对 /admin /setting 的请求，要求URL携带 code=521 参数，如果未携带提示 【暗号错误】 
   */
  
  const express = require('express');
  
  const fs = require('fs');
  const path = require('path');
  
  // 创捷应用对象
  const app = express();
  
  // 声明中间件
  let checkCodeMiddleware = (req, res, next)=>{
      // 判断URL中是否code参数等于521
      if(req.query['code'] === '521'){
          next();
      }else{
          res.send('暗号错误');
      }
  }
  
  // 创建路由
  app.get('/home', (req, res)=>{
      res.send('前台首页');
  });
  
  // 后台
  app.get('/admin', checkCodeMiddleware,(req, res)=>{
      res.send('后台首页');
  
  });
  
  // 后台设置
  app.get('/setting', checkCodeMiddleware,  (req, res)=>{
      res.send('设置页面');
  });
  
  app.listen(3000, ()=>{
      console.log('路由中间件-服务器已启动，端口3000');
  });
  ```

  

##### 7.4 静态资源中间件

通过设置静态资源中间件，可以直接在根目录下打开对应的文件，例如通过下面的代码，在public文件夹下有一个index.html，直接通过`127.0.0.1:3000/index.html`就可以打开对应的文件

```js
const express = require('express');

// 创捷应用对象
const app = express();

// 静态资源中间件的设置
// express.static返回中间件函数，服务器会在对应的文件夹下寻找对应的中间件
app.use(express.static(__dirname + '/public'));

app.get('/home', (req, res)=>{
    res.send('hello express');
});

app.listen(3000, ()=>{
    console.log('服务已启动');
});
```

##### 7.5 静态资源中间件的使用注意

1. public下的名字为`index.html`的文件是默认打开的文件，即根目录的返回页面，若没有单独设置，则使用`127.0.0.1:3000`返回的就是`index.html`，如果有单独设置，则要看代码中`app.use(express.static(__dirname + '/public'));`和`app.get`谁在前面

2. 路由一般响应动态资源，静态资源中间件响应静态资源

##### 中间件练习

利用 静态资源中间件，将尚品汇的页面部署到服务器的根目录下

```JS
const express = require('express');

const app = express();

app.use(express.static(__dirname + '/尚品汇'));

app.listen(3000, ()=>{
    console.log('服务已启动，端口3000正在监听');
});
```

#### 8. 获取请求体中的数据

express可以使用body-parser包处理请求体

第一步：安装

```
npm i body-parser
```

第二步：导入body-parser包

```
const bodyParser = require('body-parser');
```

第三步：获取中间件函数

```js
/**
 * 按照要求搭建HTTP服务
 * 
 * GET  /login 显示表单网页
 * POST /login 获取表单中的 [用户名] 和 [密码]
 */

const express = require('express');

// 导入 body-parser 解析请求体
const bodyParser = require('body-parser');

const app = express();

// 解析json格式的请求体 中间件
const jsonParser = bodyParser.json();

// 解析querystring格式的请求体 中间件
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/login', (req, res)=>{
    // 响应文件内容
    res.sendFile(__dirname + '/11-form.html');
});

app.post('/login', urlencodedParser,(req, res)=>{
    // 获取用户名和密码

    // urlencodedParser执行完毕，会在请求对象(req)新增一个属性body
    console.log(req.body);
    res.send('获取用户数据');
});

app.listen(3000, ()=>{
    console.log('server is running...');
});
```

#### 9. 防盗链

##### 9.1 什么是防盗链

防止外部网站盗用本网站的资源

##### 9.2 防盗链的原理

在请求头中有一个属性`referer`，标识了当前请求的来源，如果是本网站则响应资源，如果不是则响应404

##### 9.3 防盗链的实现

```js
const express = require('express');

const app = express();

// 声明全局中间件
app.use((req, res, next)=>{
    // 检测请求头中的 referer 是否为 127.0.0.1
    let referer = req.get('referer');
    if(referer){
        // 实例化
        let url = new URL(referer);

        // 获取 hostname
        let hostname = url.hostname;
        
        // 判断
        if(hostname !== '127.0.0.1'){
            // 响应 404
            res.status(404).send('<h1>404 Not Found</h1>');
            return;
        }
    }
    next();
});

// 静态资源设置
app.use(express.static(__dirname + '/public'));

app.get('/home', (req, res)=>{
    res.send('Express');
});

app.listen(3000, ()=>{
    console.log('服务已启动');
});
```

#### 10. 路由模块化

通过express中的Router()方法，可以生成模块化路由，并在主程序中调用
router

```js
// 1. 导入 Expres
const express = require('express');

// 2. 创建路由对象
const router = express.Router();

// 3. 创建路由规则
router.get('/home', (req, res)=>{
    res.send('前台首页');
});

router.get('/search', (req, res)=>{
    res.send('内容搜索');
});

// 4. 暴露router
module.exports = router;
```

主程序调用模块路由

```js
const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({extended: false});

router.get('/login', (req, res)=>{
    res.sendFile(__dirname + '/11-form.html');
});

router.post('/login', urlencodedParser,(req, res)=>{
    // 获取用户名和密码
    console.log(req.body);
    res.send('获取用户数据');
});

module.exports = router;
```

### 模板引擎

#### 1. 什么是模板引擎

模板引擎是分离用户界面和业务数据的一种技术

#### 2. 什么是EJS

ESJ是一个高效的JavaScript的模板引擎

官网：https://ejs.co/

中文网：https://ejs.bootcss.com

#### 3. EJS初体验

下载安装EJS，ejs也具有想上寻找的特性，在任意文件终端中安装，都会向上寻找package.json文件然后添加

```
npm i ejs
```

使用ejs

```js
// 1. 安装 EJS
// 2. 导入 EJS
const ejs = require('ejs');
const fs = require('fs');

// 字符串
let str1 = 'abc';
let str2 = 'def';

// 使用ejs渲染
let result = ejs.render('这是渲染的字符串:<%= str %>', {str: str1}); // 这是渲染的字符串:abc

// html.html '<h1>这是渲染的字符串:<%= str %></h1>'
let html = fs.readFileSync('./01-html.html').toString();
let html_after_ejs = ejs.render(html, {str: str2}); // <h1>这是渲染的字符串:def</h1>
```

#### 4. 列表渲染

批量输出一些内容

```js
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
```

#### 5. 条件渲染

```js
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
```

#### 6. express中使用ejs

```js
// 导入 express
const express = require('express');

// 导入path，修改模板引擎的路径为绝对路径
const path = require('path');

// 创建应用对象
const app = express();

// 1. 设置模板引擎
app.set('view engine', 'ejs');

// 2. 设置模板文件的存放位置 模板文件：具有模板语法内容的文件
app.set('views', path.resolve(__dirname, './views'));

// 创建路由
app.get('/home', (req, res)=>{
    // 3. render 响应
    // res.render('模板文件名', '数据');
    // 声明变量
    let title = '尚硅谷';
    let first_sentence = '这是一段测试文字';
    res.render('home', {title, first_sentence});

    // 4. 创建模板文件 home.ejs
});

// 监听端口，启动服务
app.listen(3000, ()=>{
    console.log('服务已启动， 端口3000监听中...');
});
```

#### 7. express-generator

通过应用生成器工具express-generator可以快速创建一个应用的骨架

##### 7.1 安装

```
npm install -g express-generator
```

安装完毕后该包会暴露一个命令：express

使用express -h可以查看相关的操作简介

```
C:\Users\Gin49SZ\Desktop\Study\前端开发\Node.js\Node.js实例\Express\14-模板引擎> express -v

Usage: express [options] [dir]

Options:

    --version        output the version number
-e, --ejs            add ejs engine support
    --pug            add pug engine support
    --hbs            add handlebars engine support
-H, --hogan          add hogan.js engine support
-v, --view <engine>  add view <engine> support (dust|ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
    --no-view        use static html instead of view engine
-c, --css <engine>   add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
    --git            add .gitignore
-f, --force          force on non-empty directory
-h, --help           output usage information

error: option `-v, --view <engine>' argument missing
```

##### 7.2 创建ejs应用骨架

找到创建应用的上一级目录，打开终端

```
express -e 15-generator
```

##### 7.3 初始化ejs应用骨架

第一步：安装依赖

```
npm i
```

第二步：修改package.json中的start，使用nodemon启动

```
"scripts": {
	"start": "nodemon ./bin/www"
},
```

app.js的基本结构解释

```js
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan'); // 日志工具

var indexRouter = require('./routes/index'); // 导入路由
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // 设置ejs的路径
app.set('view engine', 'ejs');

app.use(logger('dev')); // 应用中间件 日志
app.use(express.json()); // 应用中间件 请求体
app.use(express.urlencoded({ extended: false })); // 应用中间件 请求体
app.use(cookieParser()); // 应用中间件 Cookie
app.use(express.static(path.join(__dirname, 'public'))); // 静态资源文件夹

app.use('/', indexRouter); // 设置路由前缀 例如设置为users， 则对应路由模块中的每一个路由都是在users/的前提下配置
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404)); // 404 中间件
});

// 也可以使用app.all('*', function(req, res){...});


// 错误处理
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app; // 暴露
```





