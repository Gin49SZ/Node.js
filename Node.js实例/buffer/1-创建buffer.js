// 1.alloc 创建的每一个Buffer都归零
let buf = Buffer.alloc(10);

// 2. allocUnsafe 直接获取内存空间创建的Buffer，不执行清零操作可能导致Buffer中包旧的内存数据（但是速度更快）
let buf_2 = Buffer.allocUnsafe(10);

// 3. from 将一个字符串或者数组转为Buffer
let buf_3 = Buffer.from("hello");
let buf_4 = Buffer.from([1, 3, 4, 5, 4, 33, 34, 23]);

console.log(buf_4);



