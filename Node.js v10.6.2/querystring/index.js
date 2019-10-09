const querystring = require('querystring');
const url = '/api/blog/list?author=zhangsan&keyword=A';


// const query = querystring.parse(url.split('?')[1]);
const query = querystring.decode(url.split('?')[1]);
console.log(query);


// const queryStr = querystring.stringify(query);
const queryStr = querystring.encode(query);
console.log(queryStr);


console.log(querystring);
