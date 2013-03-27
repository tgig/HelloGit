
//include express
var express = require('express');
//var app = express();
var app = express.createServer();

var campfire = require("ranger").createClient("swingbyswinggolf", "f3b9861fed6dcc149d3ab09f1356633bfebf3e43");

//parse request params
app.use(express.bodyParser());

//static documents in the /public folder
app.use('/', express.static(__dirname + "/public",{maxAge:86400000}));


//listen on port 3000 for localhost or whatever for heroku deploy
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

//------------------------------------------------------------------

app.post('/speak', function (req, res) {

	campfire.room(524476, function (room) { room.speak(req.body.saythis); console.log("Just said: " + req.body.saythis); });
	res.send("Success");

});
