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
