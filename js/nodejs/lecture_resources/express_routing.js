var express = require("express");
var app = express();

    
app.get('/', function (req, res) {
    res.send('root');
});
app.get('/about', function(req, res){
    res.send('about'); 
});
app.get('/awesome_express', function(req, res){
    res.send('awesome_express'); 
});

app.listen(3000, function(){
    console.log("Express server running on port 3000");
})
