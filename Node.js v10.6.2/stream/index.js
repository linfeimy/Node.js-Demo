const stream = require('stream');

// console.log(stream);



/* 
    const http = require('http');
    const server = http.createServer((req, res) => {
        let body = '';
        req.setEncoding('utf8');
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', () => {
            try {
                const data = JSON.parse(body);
                //响应信息给用户
                res.write(typeof data);
                res.end();
            } catch(err) {
                // json解析失败
                res.statusCode = 400;
                return res.end(`错误：${err.message}`);
            }
        })
    })

    server.listen(8081);
 */

//  console.log(stream.Writable);
//  var getWritableStreamSomehow = new stream.Writable();

const myStream = getWritableStreamSomehow();
myStream.write('一些数据');
myStream.write('更多数据');
myStream.end('完成写入数据');








