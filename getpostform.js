
//Lecture No 6(part 2 Get & Post method)
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require("querystring");

http.createServer(function(req, res){
    if(req.url === '/form'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./public/form.html', 'UTF-8').pipe(res);

    }

    if(req.method === "GET"){
        var a = url.parse(req.url, true).query;
        console.log(a);
    }else if(req.method === 'POST'){
        var data = "";
        req.on("data", function(chunk){
            data += chunk;
        });
        req.on("end", function(chunk){
            var formdata = querystring.parse(data);
            console.log(formdata);
        });
    }

}).listen(4000);