//Node js = youtube: https://www.youtube.com/watch?v=-p8RiJvxCRo&list=PLlHEKJbnJj4yhum7WY-FAE4z0xgILA_dP&index=3
//creating web-server usin HTTP module through NodeJs
//run server in terminal (node server.js)
// var http = require('http');

//create funcationality to run any code,
// http.createServer(function(req,res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('Request to Receive at server' + req.url+ '<br/>');
//     res.write('Your server is run successfully');  // any content show browser
//     res.end();//response end
// }).listen(4000);     //listen port to run server

// http.createServer((req,res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('Hello Server es6');
//     res.end();
// }).listen(4000); //through es6 to reduce code.

//new lesson 3
var http = require('http');
var fs = require('fs');
var path = require('path');


http.createServer(function(req, res){

    if(req.url === '/'){                //call Home file
fs.readFile('./public/index.html', 'UTF-8', function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
});

    }else if(req.url.match('\.css$')){          //call css file
        var cssPath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(cssPath, 'UTF-8');
        res.writeHead(200, {'Content-Type': 'text/css'});
        fileStream.pipe(res);

    }else if(req.url.match('\.jpg$')){              //call image.
        var imagePath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {'Content-Type': 'image/jpg'});
        fileStream.pipe(res); 

    }else{
        res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('No page Found');
    }

}).listen(4000);