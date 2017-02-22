var User=require("../models/user");

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



	User.findOne({username:req.body.username}).select("email username password").exec(function(err,user){

		if(err) throw err;

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
							res.json({success:true,message:"User authenticated"});
						}
			
				}
				else
				{
					res.json({success:false,message:"Password not provided"});
				}	
			}


	});
});
return router;
}