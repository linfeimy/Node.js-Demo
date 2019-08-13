
```
const path = require('path');
console.log(path);
```

```
{
    resolve: [Function: resolve],
    normalize: [Function: normalize],
    isAbsolute: [Function: isAbsolute],
    join: [Function: join],
    relative: [Function: relative],
    toNamespacedPath: [Function: toNamespacedPath],
    dirname: [Function: dirname],
    basename: [Function: basename],
    extname: [Function: extname],
    format: [Function: format],
    parse: [Function: parse],
    sep: '\\',
    delimiter: ';',
    win32: [Circular],
    posix: {
        resolve: [Function: resolve],
        normalize: [Function: normalize],
        isAbsolute: [Function: isAbsolute],
        join: [Function: join],
        relative: [Function: relative],
        toNamespacedPath: [Function: toNamespacedPath],
        dirname: [Function: dirname],
        basename: [Function: basename],
        extname: [Function: extname],
        format: [Function: format],
        parse: [Function: parse],
        sep: '/',
        delimiter: ':',
        win32: [Circular],
        posix: [Circular],
        _makeLong: [Function: toNamespacedPath]
    },
    _makeLong: [Function: toNamespacedPath]
}
```


---
**path.resolve([...paths])**
- ```...paths``` ```<string>``` 路径或路径片段的序列。
- 返回: ```<string></string>```

```path.resolve()``` 方法将路径或路径片段的序列解析为绝对路径
```
// 给定的路径序列从右到左进行处理，每个后续的 path 前置，直到构造出一个绝对路径。
console.log(path.resolve('/foo/bar', './baz')); // e:\foo\bar\baz
console.log(path.resolve('/foo', '/bar', 'baz')); // e:\bar\baz
console.log(path.resolve('/foo/bar', 'baz')); // e:\foo\bar\baz



// 如果在处理完所有给定的 path 片段之后还未生成绝对路径，则再加上当前工作目录。
console.log(path.resolve('baz')); // e:\linfeimy\02personal\Node.js-Demo\baz



// 生成的路径已规范化，并且除非将路径解析为根目录，否则将删除尾部斜杠。
console.log(path.resolve('/foo/')); // e:\foo
console.log(path.resolve('/')); // e:\



// 零长度的 path 片段会被忽略。
console.log(path.resolve('')); // e:\linfeimy\02personal\Node.js-Demo
console.log(path.resolve('/')); // e:\
console.log(path.resolve('foo', '/')); // e:\



// 如果没有传入 path 片段，则 path.resolve() 将返回当前工作目录的绝对路径
console.log(path.resolve()); // e:\linfeimy\02personal\Node.js



// 如果任何参数不是字符串，则抛出 TypeError。
console.log(path.resolve(123)); 
```

---
**path.normalize(path)**
- ```...paths``` ```<string>``` 
- 返回: ```<string></string>```

```path.normalize()``` 方法规范化给定的 ```path```，解析 ```'..'``` 和 ```'.'``` 片段
```
// 当找到多个连续的路径段分隔字符时（例如 POSIX 上的 /、Windows 上的 \ 或 /），则它们将被替换为单个平台特定的路径段分隔符（POSIX 上的 /、Windows 上的 \）。 尾部的分隔符会保留
console.log(path.normalize('/foo/bar')); // \foo\bar
console.log(path.normalize('/foo/bar/')); // \foo\bar\



// 在 POSIX 上：
console.log(path.normalize('/foo/bar//baz/asdf/quux/..')); // /foo/bar/baz/asdf
// 在 Windows 上：
console.log(path.normalize('C:\\temp\\\\\foo\\bar\\..\\')); // C:\temp\oo\



// 由于 Windows 识别多种路径分隔符，因此这些分隔符都将被替换为 Windows 首选的分隔符（\）：
console.log(path.win32.normalize('C:////temp\\\\/\\/\\/foo/bar')); // C:\temp\foo\bar



//如果 path 是零长度的字符串，则返回 '.'，表示当前工作目录。
console.log(path.normalize('')); // .



// 如果任何参数不是字符串，则抛出 TypeError。
console.log(path.normalize(123)); 
```



---
**path.isAbsolute(path)**
- path ```<string>```
- 返回: ```<boolean>```

```path.isAbsolute()``` 方法检测 ```path``` 是否为绝对路径。

```
// 在 Windows 上：
console.log(path.isAbsolute('//server')); // true
console.log(path.isAbsolute('\\\\server')); // true
console.log(path.isAbsolute('C:/foo/..')); // true
console.log(path.isAbsolute('C:\\foo\\..')); // true
console.log(path.isAbsolute('bar\\baz')); // false
console.log(path.isAbsolute('bar/baz')); // false
console.log(path.isAbsolute('.')); // false
console.log(path.isAbsolute('')); // false

// 如果 path 不是字符串，则抛出 TypeError。
```



---
**path.join([...paths])**
- ```...paths <string>``` 路径片段的序列。
- 返回: ```<string>```

```path.join()``` 方法使用平台特定的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径。

```
// 零长度的 path 片段会被忽略。 如果连接的路径字符串是零长度的字符串，则返回 '.'，表示当前工作目录。
console.log(path.join()); // .
console.log(path.join('foo', '', 'bar')); // foo\bar
console.log(path.join('foo', 'bar')); // foo\bar
console.log(path.join('foo', '/bar')); // foo\bar

console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')); // \foo\bar\baz\asdf



// 如果任何路径片段不是字符串，则抛出 TypeError。
console.log(path.join('foo', {}, 'bar')); // The "path" argument must be of type string. Received type object
```


---
**path.relative(from, to)**
- from ```<string>```
- to ```<string>```
- 返回: ```<string>```

```path.relative()``` 方法根据当前工作目录返回 ```from``` 到 ```to``` 的相对路径。 如果 ```from``` 和 ```to``` 各自解析到相同的路径（分别调用 ```path.resolve()``` 之后），则返回零长度的字符串。

如果将零长度的字符串传入 ```from``` 或 ```to```，则使用当前工作目录代替该零长度的字符串。

```
console.log(path.relative('C:\\AAA\\BBB\\CCC', 'C:\\AAA\\XXX\\YYY')); // ..\..\XXX\YYY
console.log(path.relative('', 'C:\\AAA\\XXX\\YYY')); // C:\AAA\XXX\YYY
console.log(path.relative('C:\\AAA\\BBB\\CCC', '')); // f:\linfeimy\personal\Node.js-Demo

console.log(path.relative('C:\\AAA\\BBB\\CCC', 'C:\\AAA\\BBB\\CCC')); // ''



// 如果 from 或 to 不是字符串，则抛出 TypeError。
```



---
**path.toNamespacedPath(path)**
- path ```<string>```
- 返回: ```<string>```

仅在 Windows 系统上，返回给定 path 的等效名称空间前缀路径。 如果 path 不是字符串，则将返回 path 而不进行修改。

此方法仅在 Windows 系统上有意义。 在 POSIX 系统上，该方法不可操作，并且始终返回 path 而不进行修改。



---
**path.dirname(path)**
- path ```<string>```
- 返回: ```<string>```

path.dirname() 方法返回 path 的目录名，类似于 Unix 的 dirname 命令。 尾部的目录分隔符将被忽略，参阅 path.sep

如果 path 不是字符串，则抛出 TypeError。
```
console.log(path.dirname('/foo/bar/baz/asdf/quux')); // /foo/bar/baz/asdf
```



---
**path.basename(path[, ext])**
- path ```<string>```
- ext ```<string>``` 可选的文件扩展名(需要截掉的后缀内容)。
- 返回: ```<string>```

path.basename() 方法返回 path 的最后一部分，类似于 Unix 的 basename 命令。 尾部的目录分隔符将被忽略，参阅 path.sep。
```
console.log(path.basename('/foo/bar/baz/asdf/index.html')); // index.html
console.log(path.basename('/foo/bar/baz/asdf/index.html', '.html')); // index
console.log(path.basename('/foo/bar/baz/asdf/index.html', '.html123')); // index.html
console.log(path.basename('/foo/bar/baz/asdf/index.html', '.htm')); // index.html
console.log(path.basename('/foo/bar/baz/asdf/index.html', 'x.html')); // inde
console.log(path.basename('/foo/bar/baz/asdf/index.html', 'tml')); // index.h


// 如果 path 不是字符串或者给定了 ext 且不是字符串，则抛出 TypeError。
```



---
**path.extname(path)**
- path ```<string>```
- 返回: ```<string>```

path.extname() 方法返回 path 的扩展名，从最后一次出现 .（句点）字符到 path 最后一部分的字符串结束。 如果在 path 的最后一部分中没有 . ，或者如果 path 的基本名称（参阅 path.basename()）除了第一个字符以外没有 .，则返回空字符串。

```
console.log(path.extname('index.html')); // .html
console.log(path.extname('index.coffee.md')); // .md
console.log(path.extname('index.')); // .
console.log(path.extname('index')); // ''
console.log(path.extname('.index')); // .index，错了这里应该是''，应为除了第一个字符外没有.
console.log(path.extname('.index.md')); // .md

// 如果 path 不是字符串，则抛出 TypeError。 
```


---
**path.format(pathObject)**
- pathObject <Object>
    - dir ```<string>```
    - root ```<string>```
    - base ```<string>```
    - name ```<string>```
    - ext ```<string>```
    - 返回: ```<string>```
- 返回: ```<string>```

path.format() 方法从对象返回路径字符串。 与 path.parse() 相反。

当为 pathObject 提供属性时，注意以下组合，其中一些属性优先于另一些属性：
- 如果提供了 pathObject.dir，则忽略 pathObject.root。
- 如果 pathObject.base 存在，则忽略 pathObject.ext 和 pathObject.name。

```
// 在 Windows 上：
console.log(path.format({
    dir: 'C:\\path\\dir',
    base: 'file.txt'
})); // C:\path\dir\file.txt
```


---
**path.parse(path)**
- path `````<string>`````
- 返回:```<Object>```

path.parse() 方法返回一个对象，其属性表示 path 的重要元素。 尾部的目录分隔符将被忽略，参阅 path.sep。

返回的对象将具有以下属性：
- dir ```<string>```
- root ```<string>```
- base ```<string>```
- name ```<string>```
- ext ```<string>```
```
console.log(path.parse('C:\\path\\dir\\file.txt'));

{
    root: 'C:\\',
    dir: 'C:\\path\\dir',
    base: 'file.txt',
    ext: '.txt',
    name: 'file'
}

┌─────────────────────┬────────────┐
│          dir        │    base    │
├──────┬              ├──────┬─────┤
│ root │              │ name │ ext │
" C:\      path\dir   \ file  .txt "
└──────┴──────────────┴──────┴─────┘
（"" 行中的所有空格都应该被忽略，它们纯粹是为了格式化）



// 如果 path 不是字符串，则抛出 TypeError。
```



---
**path.sep**
- ```<string>```

提供平台特定的路径片段分隔符：
- Windows 上是 \。
- POSIX 上是 /。


```
console.log(path.sep); // \
console.log('foo\\bar\\baz'.split(path.sep)); // [ 'foo', 'bar', 'baz' ]
```
在 Windows 上，正斜杠（/）和反斜杠（\）都被接受为路径片段分隔符。 但是， path 方法只添加反斜杠（\）。


---
**path.delimiter**
- ```<string>```

提供平台特定的路径定界符：
- ; 用于 Windows
- : 用于 POSIX
```
// 在 POSIX 上：
console.log(process.env.PATH);
// 打印: '/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin'

process.env.PATH.split(path.delimiter);
// 返回: ['/usr/bin', '/bin', '/usr/sbin', '/sbin', '/usr/local/bin']



// 在 Windows 上：
console.log(path.delimiter); // ;
```



---
**path.win32**
- ```<Object>```

path.win32 属性提供对特定于 Windows 的 path 方法的实现的访问。
```
console.log(path.win32);



{ resolve: [Function: resolve],
  normalize: [Function: normalize],
  isAbsolute: [Function: isAbsolute],
  join: [Function: join],
  relative: [Function: relative],
  toNamespacedPath: [Function: toNamespacedPath],
  dirname: [Function: dirname],
  basename: [Function: basename],
  extname: [Function: extname],
  format: [Function: format],
  parse: [Function: parse],
  sep: '\\',
  delimiter: ';',
  win32: [Circular],
  posix:
   { resolve: [Function: resolve],
     normalize: [Function: normalize],
     isAbsolute: [Function: isAbsolute],
     join: [Function: join],
     relative: [Function: relative],
     toNamespacedPath: [Function: toNamespacedPath],
     dirname: [Function: dirname],
     basename: [Function: basename],
     extname: [Function: extname],
     format: [Function: format],
     parse: [Function: parse],
     sep: '/',
     delimiter: ':',
     win32: [Circular],
     posix: [Circular],
     _makeLong: [Function: toNamespacedPath] },
  _makeLong: [Function: toNamespacedPath] }
```





