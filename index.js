var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 8000
app.use(express.static(path.join(__dirname, '/src')));

//routes
app.get('/', function (req, res) {
	res.sendFile(path.resolve('src/index.js'));
})

app.listen(port,function() {
	console.log("App Running");
})