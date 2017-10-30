var http = require("http");

var server = http.createServer(function(req, res){
    res.writeHead(200);
    res.end("Hello World !");
});

server.listen(4000, function() {
    console.log("Server created on port 4000 ");
});
