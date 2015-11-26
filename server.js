var express = require('express');
var path = require('path');
var app 	= express();
var port 	= 8080;


app.use('/', express.static('public'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
  //__dirname : It will resolve to your project folder.
});
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
