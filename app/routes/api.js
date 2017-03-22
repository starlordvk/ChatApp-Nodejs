var User=require("../models/user");
var jwt = require('jsonwebtoken');
var secret="voldemort";

module.exports=function(router){
	//adding user to DB
	//localhost:3000/users
	//User registartion
router.post("/users",function(req,res){


	var newUser=User(req.body).save(function(err,data){
		if(err)
		{
			console.log(err);
			res.json({success:false,message:"Unable to create new user"});	
		}
		else{
			
			res.json({success:true,message:"User Created"});
			

		}
	});

});	

//User login
router.post("/authenticate",function(req,res){

console.log(req.body);

	User.findOne({username:req.body.username}).select("email username password").exec(function(err,user){

		if(err) {
			console.log(err);
			res.json({ success: false, message: err });
		}

		if(!user)
			{
				res.json({success:false,message:"Could not find user"});

			}

			else if(user)
			{
				if(req.body.password)

				{
					var validPassword=user.comparePassword(req.body.password);
					
					if(!validPassword){
						res.json({success:false,message:"Incorrect password"});
					}
				
					else{
							//creatting a webtoken usinh jsonwebtoken module
						var token=jwt.sign({
  								username: user.username,email:user.email},secret,{ expiresIn: '24h' });

							res.json({success:true,message:"User authenticated",token:token});
						}
			 	
				}
				else
				{
					res.json({success:false,message:"Password not provided"});
				}	
			}


	});
});

//creating a middleware
router.use(function(req,res,next){

var token=req.body.token ||req.body.query || req.headers['x-access-token'];
	
	if(token)

{
		// verify token
	jwt.verify(token,secret, function(err, decoded) 
	{
  	
  		if (err)
  		{
  			res.json({success:false,message:"token not verified"});

  		}
  		else
  		{
  			req.decoded=decoded;
  			next();
  		}	

	});
}	

else
{
	res.json({success:false,message:"No token found"});
}

	

});

router.post("/me",function(req,res){

	res.send(req.decoded);

});
return router;
}