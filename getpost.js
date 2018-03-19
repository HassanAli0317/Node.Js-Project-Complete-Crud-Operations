//Node.js: Handling server Get & post Method Request
//Get Method: Show Html Form through Get req.
//Post Method: Submit & show data on post Method.

//Lecture 5 (get & post)

var http = require("http");
var fs = require("fs");
var querystring = require('querystring');

var server = http.createServer(function(req, res){          //call back fun
        if(req.method === "GET"){
            res.writeHead(200, {"Content-Type": "text/html"});
            fs.createReadStream("./public/form.html", "UTF-8").pipe(res);
            // console.log("Calling Get Method");       //test file.
        }else if(req.method === "POST"){
            // console.log("Calling Post Method");    //test file
            var data = "";
            req.on("data", function(chunk){
             data += chunk;
            });
            req.on("end", function(){
             res.writeHead(200, {"content-Type": "text/html"});
             var dataP = querystring.parse(data);
             console.log(dataP);
             res.end(JSON.stringify(dataP));
          //In Video the below line was breaking so I have added the above method and it is giving me the output. 
             //res.end('${data}');
            });
           }
          });

server.listen(4000);










