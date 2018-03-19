// 10- Delete a Record in MongDB Collection. (Table).

var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/college";

http.createServer(function(req, res){
    MongoClient.connect(url, function(err, db){
        if(err) throw err;
        var dbo = db.db('college');        
        dbo.collection('students').deleteOne({"demail": "hadi197@hotmail.com"}, function(err, result){
            if(err) throw err;
            console.log("1 Record is deleted");
            db.close();
        });
    });
}).listen(4000);