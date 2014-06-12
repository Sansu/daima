var fs=require('fs');
/*fs.readFile('fs1.txt','utf-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

console.log('shasha');
fs.readFileSync('fs1.txt','utf8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
console.log('shasha1');*/
fs.open('fs1.txt','r');
