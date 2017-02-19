var User=require("../models/user");

module.exports=function(router){
	//adding user to DB
	//localhost:3000/users
router.post("/users",function(req,res){


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

return router;
}