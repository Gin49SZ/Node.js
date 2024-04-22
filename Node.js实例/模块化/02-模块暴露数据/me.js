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
// module.exports = {
//     declareName,
//     calcNumer
// };

// exports 暴露数据
exports.declareName = declareName;
exports.calcNumer = calcNumer;
console.log(module.exports);