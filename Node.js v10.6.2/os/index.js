const os = require('os');

// console.log(os);
console.log(os.arch()); // x64
console.log(os.cpus());
console.log(os.endianness()); // LE
console.log(os.freemem()); // 1853276160
console.log(os.getPriority()); // 0
console.log(os.homedir()); // C:\Users\qian0
console.log(os.hostname()); // DESKTOP-O11HVTS
console.log(os.loadavg()); // [ 0, 0, 0 ]
console.log(os.networkInterfaces());
console.log(os.platform()); // win32
console.log(os.release()); // 10.0.18362
console.log(os.setPriority(0)); // undefined
console.log(os.tmpdir()); // C:\Users\qian0\AppData\Local\Temp
console.log(os.totalmem()); // 8546934784
console.log(os.type()); // Windows_NT
console.log(os.userInfo());
console.log(os.uptime()); // 589797
console.log(os.getNetworkInterface);
console.log(os.tmpDir()); // (node:17436) [DEP0022] DeprecationWarning: os.tmpDir() is deprecated. Use os.tmpdir() instead.
console.log(os.constants);
console.log(os.signals); // undefined
console.log(os.priority); // undefined
console.log( os.EOL ); // \r\n
console.log('Hello World!'); // Hello World!
console.log('Hello ' + os.EOL + 'World!');



















// const cpus = os.cpus();
// // console.log(cpus);
//
// const networksObj = os.networkInterfaces();
// for(let nw in networksObj) {
//     let objArr = networksObj[nw];
//     console.log(`\r\n${nw}:`);
//     objArr.forEach((obj, idx, arr) => {
//         console.log(obj);
//         // console.log(`地址：${obj.address}`);
//     })
// }









