//Update Document in MongoDB collection (Table);


//update function have 3 parameters.


var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/college";

http.createServer(function(req, res){
    MongoClient.connect(url, function(err, db){
        if(err) throw err;
        var dbo = db.db('college');
        var data = {'demail': "hassanali197@outlook.com"};             //old data
        var newdata = {$set: {'dname': "Hadi", 'demail': "hadi197@hotmail.com", 'daddress': "197/R.B Baghewala"}};            //new data.
        dbo.collection('students').updateOne(data, newdata, function(err, result){
            if(err) throw err;
            console.log("1 Record is Updated");
            db.close();
        });
    });
}).listen(4000);