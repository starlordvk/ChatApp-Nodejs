var mongoose=require("mongoose");
var bcrypt=require("bcrypt-nodejs");

mongoose.Promise = global.Promise;


//creating schema for database
var userSchema=new mongoose.Schema({
	username: String,
	password: String,
	email: String
});


//encrytpting password
userSchema.pre('save', function (next) { 
	var user=this;
	bcrypt.hash(user.password,null,null,function(err,hash){
		if(err) return next(err);
		user.password=hash;
	});
  next();
});



module.exports=mongoose.model("User",userSchema);
