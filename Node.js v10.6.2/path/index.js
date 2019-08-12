var path = require('path');

// console.log(path);

// path.resolve([...paths])
// ...paths <string> 路径或路径片段的序列。
// 返回: <string></string>

// path.resolve() 方法将路径或路径片段的序列解析为绝对路径
// 给定的路径序列从右到左进行处理，每个后续的 path 前置，直到构造出一个绝对路径。例如，给定的路径片段序列：/foo、 /bar、 baz，调用 path.resolve('/foo', '/bar', 'baz') 将返回 /bar/baz。
// 如果在处理完所有给定的 path 片段之后还未生成绝对路径，则再加上当前工作目录。

// console.log(path.resolve('/foo/bar', './baz')); // e:\foo\bar\baz
// console.log(path.resolve('/foo', '/bar', 'baz')); // e:\bar\baz
// console.log(path.resolve('/foo/bar', 'baz')); // e:\foo\bar\baz
// console.log(path.resolve('/foo/bar', './baz')); // e:\foo\bar\baz

// 如果在处理完所有给定的 path 片段之后还未生成绝对路径，则再加上当前工作目录。
// console.log(path.resolve('baz')); // e:\linfeimy\02personal\Node.js\baz


// 生成的路径已规范化，并且除非将路径解析为根目录，否则将删除尾部斜杠。
console.log(path.resolve('/foo/')); // e:\foo



// 零长度的 path 片段会被忽略。
// console.log(path.resolve('')); // e:\linfeimy\02personal\Node.js



// 如果没有传入 path 片段，则 path.resolve() 将返回当前工作目录的绝对路径
// console.log(path.resolve()); // e:\linfeimy\02personal\Node.js



// 如果任何参数不是字符串，则抛出 TypeError。
// console.log(path.resolve(123)); // TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received type number at validateString (internal/validators.js:125:11)









