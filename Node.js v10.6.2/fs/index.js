const fs = require('fs');



var w_data = 'Node.js中文网';
fs.writeFile('./test01.txt', w_data, {encoding: 'utf8', flag: 'a'}, function (err, data) {
   if(err) throw err;
   console.log(data);
});

















































