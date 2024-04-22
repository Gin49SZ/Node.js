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







