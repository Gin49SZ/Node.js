// 1. 导入 fs 模块
const fs = require('fs');

// // 2. 创建文件夹
// fs.mkdir('./html', err => {
//     if(err){
//         console.log('创建失败');
//         return;
//     }
//     console.log('创建成功');
// });

// // 2.2 递归创建 创建 a -> a中创建b -> b中创建c
// fs.mkdir('./a/b/c', {recursive: true}, err => {
//     if(err){
//         console.log('创建失败');
//         return;
//     }
//     console.log('创建成功');
// });

// // 2-3 读取文件夹 使用方法和mkdir一样，但是回调函数传递两个参数，分别是错误信息和读取的内容
// fs.readdir('./a', (err, data) => {
//     if(err){
//         console.log('读取失败');
//         return;
//     }
//     console.log(data);
// });

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