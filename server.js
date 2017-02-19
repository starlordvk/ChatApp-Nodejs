var express=require("express");
var app=express();
var port=process.env.PORT||4000;
var morgan=require("morgan");
var mongoose=require("mongoose");
var router=express.Router();
var appRoutes=require("./app/routes/api")(router);
var bodyParser=require("body-parser");
mongoose.Promise = require('bluebird');



//to log in the requests in cmd
app.use(morgan('dev'));

//using body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//using router
app.use("/api",appRoutes);


//connecting to the DB
mongoose.connect("mongodb://varun:varun@ds157459.mlab.com:57459/meanappvk",function(err){
	if(err)
		console.log("Connection to database failed");
	else
		console.log("Connection to database successful");	
});




app.get("/",function(req,res){
	res.send("welcome");

});






 app.listen(port,function(){
 	console.log("listening on port "+port);

 });