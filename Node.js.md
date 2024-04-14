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















