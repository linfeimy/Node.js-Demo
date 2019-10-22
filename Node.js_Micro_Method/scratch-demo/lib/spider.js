var fs = require('fs');
var util = require('util');
var chalk = require('chalk');
var superagent = require('superagent');
var cheerio = require('cheerio');
var async = require('async');

// 输出中间文件名
var outputFile = 'data.json';

var baseUrl = 'https://movie.douban.com/top250';

// 设定请求头部
var headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    // 'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh,zh-TW;q=0.9,en-US;q=0.8,en;q=0.7,zh-CN;q=0.6',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36'
};

// superagent.get(baseUrl)
//     .set(headers)
//     .then(res => {
//         // console.info(util.inspect(res.text, true));
//     })



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


function dataCatcher(url, headers, index, callback) {
    superagent.get(url)
        .set(headers)
        .then(res => {
            dataWatcher(res.text, index, callback)
        })
}

function dataWatcher(data, index, callback) {
    // var $ = cheerio.load(data);
    // console.info(`now washing page： ${index + 1}`);
    // callback(null, index);

    var result = [];
    var $ = cheerio.load(data);
    var liList = $('.grid_view li');
    for(var i = 0; i < liList.length; i++) {
        var item = $(liList[i]).find('.item');
        var head = $(item).find('.info .hd');
        var body = $(item).find('.info .bd');

        var data = {
            order: $(item).find('.pic em').text(),
            src: $(item).find('.pic a img').attr('src'),
            title: $(head).find('.title').text(),
            link: $(head).find('.a').attr('href'),
            content: $(body).find('p').text(),
            quote: $(body).find('.quote span').text()
        }

        console.info(data);
        result.push(data);
    }

    console.info(`now washing page：${chalk.yellow(index + 1)}`);
    callback(null, {
        index: index,
        data: result
    })
}


async.mapLimit(urlList, 3, (url, callback) => {
    dataCatcher(url.url, headers, url.index, callback)
}, (err, results) => {
    // console.info(util.inspect(results, true));
    if(err) {
        throw new Error(err);
    }

    fs.writeFile(outputFile, JSON.stringify(results, null, 2), function(err) {
        if(err) {
            throw new Error(err);
        }
        console.info(chalk.yellow(`文件抓取已经完成，内容在${outputFile} 中`));
    })
});






// https://www.9xkd.com/course/1007651700.html
// https://my.oschina.net/u/2252639/blog/3052496