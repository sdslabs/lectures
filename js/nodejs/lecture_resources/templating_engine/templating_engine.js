var express = require("express");
var app = express();

app.set('view engine', 'ejs');
    
app.get('/', function (req, res) {
    res.send('root page');
});
app.get('/about', function(req, res){
    res.render('my_template', {data: "My super awesome string"}); 
});

app.listen(3000, function(){
    console.log("Express server running on port 3000");
})


