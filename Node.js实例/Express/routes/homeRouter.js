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












