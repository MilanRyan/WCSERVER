const { response } = require("Express");
var express = require("Express");

var app = express();

app.get("/", function(request, response){
  response.send("hello world!-Ryan joshua Milan WD-202");
	
});

app.listen(3000, function(){
  console.log('Server running at http://localhost:3000');
});