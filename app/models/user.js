var mongoose=require("mongoose");


mongoose.Promise = global.Promise;


//creating schema for database
var userSchema=new mongoose.Schema({
	username: String,
	password: String,
	email: String
});

module.exports=mongoose.model("User",userSchema);