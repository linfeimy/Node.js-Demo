// const http = require('http');


// console.log(http);
// console.log(http.METHODS);
// console.log(http.Agent);




// var server = http.createServer(function (req, res) {
//     res.writeHead(200, {
//         "Content-Type": "text/plain"
//     });
//     res.write('Hello World!');
//     res.end();
// });
// server.listen(3000);


//
// http.get({
//     hostname: 'localhost',
//     port: 3000,
//     path: '/about',
//     agent: false
// }, (res) => {
//     if(err) throw err;
//     console.log(1);
// }).on('socket', (socket) => {
//     socket.emit('agentRemove');
// });





/*

const http = require('http');

// http server例子
const server = http.createServer(function (serverReq, serverRes) {
    const url = serverReq.url;
    serverRes.end('您访问的地址： ' + decodeURI(url));
})

server.listen(3000);

*/

/*

const http = require('http');
const server = new http.Server();
server.on("request", function (req, res) {
    res.writeHead(200, {
        'content-type': 'text/plain'
    });
    res.write('Hello Node.js!');
    res.end();
})
server.listen(3000);


*/





const http = require('http');
// console.log(http.ServerResponse);
// console.log(http.createServer());
// console.log(http.get());
// console.log(http.request());























