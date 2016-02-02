var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static("views"));

app.listen(port, function(err){
	console.log("running server on port "+ port);
});