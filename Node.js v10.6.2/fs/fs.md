
```
const fs = require('fs');

console.log(fs);
```


```
{
    appendFile: [Function: appendFile],
    appendFileSync: [Function: appendFileSync],
    access: [Function: access],
    accessSync: [Function: accessSync],
    chown: [Function: chown],
    chownSync: [Function: chownSync],
    chmod: [Function: chmod],
    chmodSync: [Function: chmodSync],
    close: [Function: close],
    closeSync: [Function: closeSync],
    copyFile: [Function: copyFile],
    copyFileSync: [Function: copyFileSync],
    createReadStream: [Function: createReadStream],
    createWriteStream: [Function: createWriteStream],
    exists: [Function: exists],
    existsSync: [Function: existsSync],
    fchown: [Function: fchown],
    fchownSync: [Function: fchownSync],
    fchmod: [Function: fchmod],
    fchmodSync: [Function: fchmodSync],
    fdatasync: [Function: fdatasync],
    fdatasyncSync: [Function: fdatasyncSync],
    fstat: [Function: fstat],
    fstatSync: [Function: fstatSync],
    fsync: [Function: fsync],
    fsyncSync: [Function: fsyncSync],
    ftruncate: [Function: ftruncate],
    ftruncateSync: [Function: ftruncateSync],
    futimes: [Function: futimes],
    futimesSync: [Function: futimesSync],
    lchown: [Function: lchown],
    lchownSync: [Function: lchownSync],
    lchmod: undefined,
    lchmodSync: undefined,
    link: [Function: link],
    linkSync: [Function: linkSync],
    lstat: [Function: lstat],
    lstatSync: [Function: lstatSync],
    mkdir: [Function: mkdir],
    mkdirSync: [Function: mkdirSync],
    mkdtemp: [Function: mkdtemp],
    mkdtempSync: [Function: mkdtempSync],
    open: [Function: open],
    openSync: [Function: openSync],
    readdir: [Function: readdir],
    readdirSync: [Function: readdirSync],
    read: [Function: read],
    readSync: [Function: readSync],
    readFile: [Function: readFile],
    readFileSync: [Function: readFileSync],
    readlink: [Function: readlink],
    readlinkSync: [Function: readlinkSync],
    realpath: { [Function: realpath] native: [Function]
    },
    realpathSync: { [Function: realpathSync] native: [Function]
    },
    rename: [Function: rename],
    renameSync: [Function: renameSync],
    rmdir: [Function: rmdir],
    rmdirSync: [Function: rmdirSync],
    stat: [Function: stat],
    statSync: [Function: statSync],
    symlink: [Function: symlink],
    symlinkSync: [Function: symlinkSync],
    truncate: [Function: truncate],
    truncateSync: [Function: truncateSync],
    unwatchFile: [Function: unwatchFile],
    unlink: [Function: unlink],
    unlinkSync: [Function: unlinkSync],
    utimes: [Function: utimes],
    utimesSync: [Function: utimesSync],
    watch: [Function: watch],
    watchFile: [Function: watchFile],
    writeFile: [Function: writeFile],
    writeFileSync: [Function: writeFileSync],
    write: [Function: write],
    writeSync: [Function: writeSync],
    Dirent: [Function: Dirent],
    Stats: [Function: Stats],
    ReadStream: { [Function: ReadStream] super_: { [Function: Readable] ReadableState: [Function: ReadableState],
            super_: [Function],
            _fromList: [Function: fromList]
        }
    },
    WriteStream: { [Function: WriteStream] super_: { [Function: Writable] WritableState: [Function: WritableState],
            super_: [Function]
        }
    },
    FileReadStream: { [Function: ReadStream] super_: { [Function: Readable] ReadableState: [Function: ReadableState],
            super_: [Function],
            _fromList: [Function: fromList]
        }
    },
    FileWriteStream: { [Function: WriteStream] super_: { [Function: Writable] WritableState: [Function: WritableState],
            super_: [Function]
        }
    },
    _toUnixTimestamp: [Function: toUnixTimestamp],
    F_OK: 0,
    R_OK: 4,
    W_OK: 2,
    X_OK: 1,
    constants: [Object: null prototype] {
        UV_FS_SYMLINK_DIR: 1,
        UV_FS_SYMLINK_JUNCTION: 2,
        O_RDONLY: 0,
        O_WRONLY: 1,
        O_RDWR: 2,
        UV_DIRENT_UNKNOWN: 0,
        UV_DIRENT_FILE: 1,
        UV_DIRENT_DIR: 2,
        UV_DIRENT_LINK: 3,
        UV_DIRENT_FIFO: 4,
        UV_DIRENT_SOCKET: 5,
        UV_DIRENT_CHAR: 6,
        UV_DIRENT_BLOCK: 7,
        S_IFMT: 61440,
        S_IFREG: 32768,
        S_IFDIR: 16384,
        S_IFCHR: 8192,
        S_IFLNK: 40960,
        O_CREAT: 256,
        O_EXCL: 1024,
        O_TRUNC: 512,
        O_APPEND: 8,
        F_OK: 0,
        R_OK: 4,
        W_OK: 2,
        X_OK: 1,
        UV_FS_COPYFILE_EXCL: 1,
        COPYFILE_EXCL: 1,
        UV_FS_COPYFILE_FICLONE: 2,
        COPYFILE_FICLONE: 2,
        UV_FS_COPYFILE_FICLONE_FORCE: 4,
        COPYFILE_FICLONE_FORCE: 4
    }
}
```

---
**fs.readFile(path[, options], callback)**;
- ```path``` ```<string>``` | ```<Buffer>``` | ```<URL>``` | ```<integer>``` 文件名或文件描述符。
- ```options``` ```<Object>``` | ```<string>```
  
  - ```encoding``` ```<string>``` | ```<null>``` 默认值: null。
  - flag ```<string>``` 参阅支持的**文件系统标志**。默认值: 'r'。
- ```callback``` ```<Function>```
  - err ```<Error>```
  - data ```<string>``` | ```<Buffer>```

异步地读取文件的全部内容
```
const fs = require('fs');
/*
fs.readFile('./test01.txt', function (err, data) {
    if(err) throw  err;
    console.log('文件内容:', data); // 文件内容: <Buffer 0d 0a 74 65 73 74 30 31 2e 74 78 74 0d 0a 0d 0a 0d 0a 0d 0a>
});
*/

fs.readFile('./test01.txt', 'utf8', function (err, data) {
    if(err) throw  err;
    console.log('文件内容:', data); // 文件内容:test01.txt
});

如果没有指定 encoding，则返回原始的 buffer。

如果 options 是字符串，则它指定字符编码

fs.readFile() 函数会缓冲整个文件。 为了最小化内存成本，尽可能通过 fs.createReadStream() 进行流式传输
```
---
**fs.writeFile(file, data[, options], callback)**
- file ```<string>``` | ```<Buffer>``` | ```<URL>``` | ```<integer>``` 文件名或文件描述符。
- data ```<string>``` | ```<Buffer>``` | ```<TypedArray>``` | ```<DataView>```
- options ```<Object>``` | ```<string>```
    - encoding ```<string>``` | ```<null>``` 默认值: 'utf8'。
    - mode ```<integer>``` 默认值: 0o666。
    - flag ```<string>``` 参阅支持的文件系统标志。默认值: 'w'。
- callback ```<Function>```
    - err ```<Error>```


```
const fs = require('fs');

var w_data = 'Node.js中文网';
fs.writeFile('./test01.txt', w_data, {encoding: 'utf8', flag: 'a'}, function (err, data) {
   if(err) throw err;
   console.log(data);
});

{flag: 'a'} 加上这个参数，内容将会被以追加方式写入文件，不加上这个参数则会先清空内容，再写入数据
```



```

```






```

```







```

```








```

```








```

```










```

```




