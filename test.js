/* var fs=require('fs');

function copy(src ,dst){
    fs.writeFileSync(dst , fs.readFileSync(src));
}

function main(argv){
    copy(argv[0],argv[1]);
}

main(process.argv.slice(2));ssss
var http=require('http');

http.createServer(function (request,response){
    response.writeHead(200,{'Content-Type':'text-plain'});
    response.end('hello world\n');
}).listen(8124);
*/

var http=require('http');  
http.createServer(function (request, response) {
        response.writeHead(200, { 'Content-Type': 'text/plain' });

            request.on('data', function (chunk) {
                        response.write(chunk);
                            });

                request.on('end', function () {
                            response.end();
                                });
}).listen(8124);
