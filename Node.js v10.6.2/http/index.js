const http = require('http');


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



http.get({
    hostname: 'localhost',
    port: 3000,
    path: '/about',
    agent: false
}, (res) => {
    if(err) throw err;
    console.log(1);
}).on('socket', (socket) => {
    socket.emit('agentRemove');
});












































