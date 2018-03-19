
// -08 Find a Collection in MongoDB. (Table).
//Show HTML Page in Get Method.
//Data Fetch in MongoDB & then Show.

// var http = require('http');
// var MongoClient = require('mongodb').MongoClient;           //help connection establish in mongodb.
// var url = "mongodb://localhost:27017/college";

// http.createServer(function(req, res){
//     MongoClient.connect(url, function(err, db){
//         if(err) throw err;
//         var dbo = db.db("college");
//         dbo.collection('students').findOne({}, function(err, result){
//             if(err) throw err;
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.end(JSON.stringify(result));
//         });
//     });

// }).listen(4000);


//09- find all the record on mongodb collection.
//show html form
//Fetch all the record in mongo db & then show on front.

var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/college";

http.createServer(function(req, res){
    MongoClient.connect(url, function(err, db){
        if(err) throw err;

        var dbo = db.db('college');
        dbo.collection('students').find({}, {_id: false}).toArray(function(err, result){
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(JSON.stringify (result));
        });
    });
}).listen(4000);