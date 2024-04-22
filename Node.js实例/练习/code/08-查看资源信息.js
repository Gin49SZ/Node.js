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