var express=require("express");
var app=express();
var port=process.env.PORT||4000;
var morgan=require("morgan");
var mongoose=require("mongoose");
var router=express.Router();
var appRoutes=require("./app/routes/api")(router);
var bodyParser=require("body-parser");
var path=require("path");
mongoose.Promise = require('bluebird');



//to log in the requests in cmd
app.use(morgan('dev'));

//using body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//to serve static files
app.use(express.static(__dirname+"/public"));

//using router
app.use("/api",appRoutes);


//connecting to the DB
mongoose.connect("mongodb://varun:varun@ds157459.mlab.com:57459/meanappvk",function(err){
	if(err)
		console.log("Connection to database failed");
	else
		console.log("Connection to database successful");	
});


app.get("*",function(req,res){
	res.sendFile(path.join(__dirname+"/public/app/views/index.html"));

});






 app.listen(port,function(){
 	console.log("listening on port "+port);

 });