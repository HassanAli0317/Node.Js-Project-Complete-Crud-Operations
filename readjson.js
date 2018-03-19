//reading a jason file at node.js
//Generating Jason from routing using a node.js


var http = require('http');
var staff = require('./public/data/staff.json');



var server = http.createServer(function(req, res){
    // console.log(req.url);
    
    if(req.url === "/"){                            //this is home code show all data
        res.writeHead(200, {"Content-Type": "text/json"});
        res.end(JSON.stringify(staff));    //json always show on string, so predefined variable is JSON.stringfy to convert the object string.

    }else if(req.url === "/node.js"){                           //Show selected User's (user 1).
        var data = staff.filter(function(item){                    //use javascript fun filter to filter all data staff file.
            return item.language === "node.js";

        });
        res.writeHead(200, {"Content-Type": "text/json"});
        res.end(JSON.stringify(data));
        
    }else if(req.url === "/.asm"){                   //(user 2)
        var data = staff.filter(function(item){
           return item.language === ".asm";
        });
        res.writeHead(200, {"Content-Type": "text/json"});        
        res.end(JSON.stringify(data));
        
    }else if(req.url === "/react.js"){                 //(user 3)
        var data = staff.filter(function(item){
           return item.language === "react.js"

        });
        res.writeHead(200, {"Content-Type": "text/json"});                
        res.end(JSON.stringify(data));
    }else if(req.url === "/asp.net"){
        var data = staff.filter(function(item){
           return item.language === "asp.net"
        });
        res.writeHead(200, {"Content-Type": "text/json"});                
        res.end(JSON.stringify(data));
        
    }else{
        res.writeHead(404, {"Content-Type": "text/html"});                
        res.end("No Record Found");
    }
});

server.listen(4000, function(){
    console.log("Server listening on port 4000");
});