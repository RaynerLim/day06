//load libraries
var express = require("express");

//Create instance of Express
var app = express();

/*
var staticResources = ["/public","bower_components"]

for(var i in staticResources){
    app.use(express.static(__dirname + staticResources[i]));
}
*/

//Define static directory routes
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/bower_components"));

//list programs/files processed/loaded
for(var i in process.argv){
    console.log(">> argv = " + process.argv[i]
    + ", typeof = " + typeof(process.argv[i]));
}

var port = process.argv[2] || 3000;

//bind the app to the port
app.listen(port,function(){
    console.log("Application stated on port %d", port)
});
