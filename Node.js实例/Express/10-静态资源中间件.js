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



