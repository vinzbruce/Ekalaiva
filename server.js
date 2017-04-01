var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 3000;
var path = require('path');

var router = require('./server/route/router');
app.use(bodyParser.json());

app.use('/api', router);

app.use(express.static(path.join(__dirname, 'dist')));

app.get("*", (req, res)=>{

res.sendFile(path.join(__dirname, 'dist/index.html'));
});




app.listen(port, ()=>{
  console.log(`listening in port ${port}`);
});
