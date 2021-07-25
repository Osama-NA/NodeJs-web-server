const http = require('http');
const fs = require('fs');

//Use available port OR port 3000
const port = process.env.PORT || 3000;

//Creating Server
const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('index.html', function(error, data){
        if(error){
            res.writeHead(404);
            res.write('Error: ' + error);
        }else{
            res.write(data);
        }
        res.end();
    });
});

//Setting server to listen on given port
server.listen(port, function(error){
    if(error){
        console.log('Some error occurred: ', error);
    }else{
        console.log('Listening on port: ', port);
    }
});