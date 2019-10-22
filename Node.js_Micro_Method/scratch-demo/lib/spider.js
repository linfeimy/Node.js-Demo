var util = require('util');
var chalk = require('chalk');
var superagent = require('superagent');
var cheerio = require('cheerio');

var baseUrl = 'https://movie.douban.com/top250';

// 设定请求头部
var headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    // 'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh,zh-TW;q=0.9,en-US;q=0.8,en;q=0.7,zh-CN;q=0.6',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36'
};

superagent.get(baseUrl)
    .set(headers)
    .then(res => {
        // console.info(util.inspect(res.text, true));
    })



var urlList = (function() {
    // 构造url列表
    var result = [];
    for(var i = 0; i < 10; i++) {
        var reqUrl = `${baseUrl}?start=${i * 25}&filter=`;
        var req = {
            index: i, 
            url: reqUrl
        }
        result.push(req);
    }
    return result;
})();

// console.log(urlList);


// https://www.9xkd.com/course/1007651700.html