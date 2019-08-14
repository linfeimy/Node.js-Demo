const url = require('url');

// console.log(url);

var urlStr = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash';

const result = url.parse(urlStr);
console.log(result);

const result1 = url.parse(urlStr, true);
console.log(result1);

const urlObj = {
    protocol: 'http:',
    slashes: true,
    hostname: 'jianshu.com',
    port: 80,
    hash: '#hash',
    search: '?query=string',
    path: '/nodejs?query=string'
}
const result2 = url.format(urlObj);
console.log(result2);


console.log(url.resolve('/one/two/three', 'four')); // /one/two/four
console.log(url.resolve('/one/two/three/', 'four')); // /one/two/three/four
console.log(url.resolve('http://example.com/', '/one')); // http://example.com/one
console.log(url.resolve('http://example.com/one', '/two')); // http://example.com/two








