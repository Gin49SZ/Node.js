const express = require('express');

// 导入homeRouter
const homeRouter = require('./routes/homeRouter')
const loginRouter = require('./routes/loginRouter')

const app = express();

// 设置
app.use(homeRouter);
app.use(loginRouter);

app.listen(3000, ()=>{
    console.log('server is running...');
});

