//Node.js _ insert a Collection in MongoDB
//Show HTML Form & PosT & Get Method.


var http = require('http');
var fs = require('fs');             //file System build-in Node.js show html file.
var querystring = require('querystring');

var MongoClient = require('mongodb').MongoClient;               //help connection setup in mongodb
var url = "mongodb://localhost:27017/college";

http.createServer(function(req, res){
    if(req.url === "/form"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream("./public/form.html", "UTF-8").pipe(res);
    }

    if(req.method === "POST"){
        var data = "";
        req.on("data", function(chunk){
            data+=chunk;
        });
        req.on("end", function(chunk){
            // console.log(data);                      //Data get in Pure string.
            // var q = querystring.parse(data);            //now data in objects form
            // console.log(q);
            MongoClient.connect(url, function(err, db){
                if(err) throw err;
                var dbo = db.db("college");
                var formFieldData = querystring.parse(data); 
                
                dbo.collection("students").insertOne(formFieldData, function(err, res){
                    if(err) throw err;
                    console.log("1 data inserted Success.");
                    db.close();
                });
            });
        });
    }

}).listen(4000);