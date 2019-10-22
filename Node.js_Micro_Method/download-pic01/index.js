//======================================================
// https://www.meitulu.com图片批量下载Node.js爬虫1.02
// 2017年11月6日
//======================================================


// 内置https模块，提供了https服务器和客户端功能
var https=require("https");
var http=require("http");
var zlib = require('zlib');
// console.log('ddd', zlib);
// cheerio模块，提供了类似jQuery的功能
var cheerio = require("cheerio");
var fs=require('fs');

// 请求参数JSON
var options;

// request请求
var req;

// http://7weixin.top/#/resourceLibrary/index
//--------------------------------------
// 程序入口 Accept-Encoding:gzip, deflate, br
//--------------------------------------
function start(){
    // var pageUrl="https://www.meitulu.com/item/44.html";// 这版修改这个地址就成
    var pageUrl="https://www.ivsky.com/tupian/nvjingling_t8608/";// 这版修改这个地址就成

    var hostName="";
    var Path="";
    var arr=pageUrl.split("/");
    hostName=arr[2];
    Path="/"+arr[3]+"/"+arr[4];

    // 初始化options  
    options={
        hostname:hostName,
            port:443,
            path:Path,// 子路径
          method:'GET',
           agent:false,
            gzip: true,
    };
    
    req=https.request(options,function(resp){
        var html = [];

        resp.on("data", function(data) {
            // console.log('data .....', data.toString());
            html.push(data);
        })
        resp.on("end", function() {
            var buffer = Buffer.concat(html);
            // zlib.gunzip(buffer, function(err, decoded) {
                // console.log(decoded.toString());// gzip解压后的html文本
                // var body=decoded.toString();
                var body=buffer.toString();
                var $ = cheerio.load(body);
                var endIndex=0;
                var folder="";

                // 查找所有class为c_l的节点下面的p节点
                $(".c_l p").each(function(index,element){
                    if(index==2){
                        var text=$(element).text();
                        //console.log(text); // 图片数量：112张

                        var arr=text.split(" ");
                        endIndex=arr[1];// 112
                    }
                })   

                // 查找所有class为c_l的节点下面的p节点
                $(".content center img").each(function(index,element){
                    if(index==0){
                        var text=$(element).attr("src");
                        //console.log(text); // http://mtl.ttsqgs.com/images/img/44/1.jpg" 

                        var arr=text.split("/");
                        folder=arr[arr.length-2];                        
                    }
                }) 
                
                console.log(endIndex);
                console.log(folder);    

                fs.mkdir('./'+folder,function(err){
                    if(err){
                        console.log("目录"+folder+"已经存在");
                    }
                });
                
                // 下载图片
                for(var i=1;i<=endIndex;i++){
                    downloadPic(folder,i);
                }

            // })
        })
        // .on("error", function() {
        //     console.log("获取失败")
        // })
    });

    // 超时处理
    req.setTimeout(5000,function(){
        req.abort();
    });

    // 出错处理
    req.on('error',function(err){
        if(err.code=="ECONNRESET"){
            console.log('socket端口连接超时。');
        }else{
            console.log('请求发生错误，err.code:'+err.code);
        }
    });

    // 请求结束
    req.end();
}

//--------------------------------------
// 下载图片
// folder:图片所在url的目录
// pinctureIndex:图片序号
//--------------------------------------
function downloadPic(folder,pinctureIndex){
    console.log("开始下载"+pinctureIndex);

    // 初始化options
    options={
        hostname:'mtl.ttsqgs.com',// 这里别加http://，否则会出现ENOTFOUND错误
            port:80,
            path:'/images/img/'+folder+'/'+pinctureIndex+'.jpg',// 子路径
          method:'GET',
    };

    req=http.request(options,function(resp){
        var imgData = "";
        resp.setEncoding("binary"); 

        resp.on('data',function(chunk){
            imgData+=chunk;            
        });

        resp.on('end',function(){
            var fileName="./"+folder+"/"+pinctureIndex+".jpg";
            fs.writeFile(fileName, imgData, "binary", function(err){
                if(err){
                    console.log("文件"+fileName+"下载失败.");
                }
                console.log(fileName+"下载成功");
            });    
        });
    });

    // 超时处理
    req.setTimeout(5000,function(){
        req.abort();
    });

    // 出错处理
    req.on('error',function(err){
        if(err.code=="ECONNRESET"){
            console.log('socket端口连接超时。');
        }else{
            console.log('请求发生错误，err.code:'+err.code);
        }
    });

    // 请求结束
    req.end();
}

// 调用start函数，程序开始
start();