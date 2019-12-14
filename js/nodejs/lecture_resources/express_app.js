var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hello World !")
});

app.listen(3000, function() {
    console.log("An app is running on port 3000");
})
