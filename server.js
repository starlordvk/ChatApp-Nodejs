var express=require("express");
var app=express();
var port=process.env.PORT||3000;
var morgan=require("morgan");
var mongoose=require("mongoose");
var User=require("./app/models/user");
var bodyParser=require("body-parser");
mongoose.Promise = require('bluebird');



//to log in the requests in cmd
app.use(morgan('dev'));

//connecting to the DB
mongoose.connect("mongodb://varun:varun@ds157459.mlab.com:57459/meanappvk",function(err){
	if(err)
		console.log("Connection to database failed");
	else
		console.log("Connection to database successful");	
});


//using body-parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.get("/",function(req,res){
	res.send("welcome");

});


//adding user to DB
app.post("/users",urlencodedParser,function(req,res){


	var newUser=User(req.body).save(function(err,data){
		if(err)
		{
			console.log(err);
			res.send("Something went wrong");	
		}
		else{
			
			res.json(data);
			console.log("user created");

		}
	});

});	




 app.listen(port,function(){
 	console.log("listening on port "+port);

 });