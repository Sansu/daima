var fs=require('fs');
var querystring=require("querystring");
var formidable=require("formidable");

function start(res){
    fs.readFile('./index.html',function(err,html){
       if(err){
           throw err;
       }
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(html);
        res.end();
    });
}
function upload(res,req){
    var form=new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(req,function(error,fields,files){
        fs.rename(files.upload.path,'/tmp/test1.png');
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("received image:<br/>");
        res.write("<img src='/show'/>");
        res.end();
    });

}

function show(res){
//    fs.readFile("./tmp/test1.jpg",'binary',function(error,file){
//        if(error){
//            res.writeHead(500,{"Content-Type":"text/plain"});
//            res.write(error+"\n");
//            res.end();
//        }else{
//            res.writeHead(200,{"Content-Type":"image/png"});
//            res.write(file,'binary');
//            res.end();
//        }
//    });
    res.writeHead(200, {"Content-Type": "image/png"});
    fs.createReadStream("/tmp/test1.png").pipe(res);
}

exports.start=start;
exports.upload=upload;
exports.show=show;