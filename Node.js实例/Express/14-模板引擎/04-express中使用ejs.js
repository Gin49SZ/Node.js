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
