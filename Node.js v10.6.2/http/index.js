const http = require('http');


// console.log(http);


http.createServer(function (req, res) {
    console.log(res);
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    res.write('Hello World!');
    res.end();
}).listen(3000);














































