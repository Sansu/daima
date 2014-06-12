var http=require('http');
var url=require('url');

function start(router,handle){
    http.createServer(function(req,res){
       // var postData="";
        var pathname=url.parse(req.url).pathname;
        //处理request数据
//        req.setEncoding('utf8');
//        req.addListener("data",function(postDataChunk){
//            postData+=postDataChunk;
//            console.log("post data chunk"+ postDataChunk+ ".")
//        });
//        req.addListener("end",function(){
//            router.route(handle,pathname,res,postData);
//        });
        router.route(handle,pathname,res,req);

    }).listen('8888');
}

exports.start=start;

