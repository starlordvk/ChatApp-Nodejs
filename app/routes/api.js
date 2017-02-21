var User=require("../models/user");

module.exports=function(router){
	//adding user to DB
	//localhost:3000/users
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

return router;
}