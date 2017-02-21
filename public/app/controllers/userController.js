var userController=angular.module("userController",[]);

userController.controller("regControl",function($http){

	var app=this;
	app.errormsg=false;
	app.successMsg=false;
	 this.regUser=function(regData){
		console.log("form submitted");
		//making an HTTP request to the backend
		$http.post('/api/users',this.regData).then(function(data){

			console.log(data.data.success);
			console.log(data.data.message);

			//if user creation is successfull and json data received has success=true
			if(data.data.success)
			{
				//Create success message and redirect to the homepage
				app.successMsg=data.data.message;


			}
			else
			{
				app.errormsg=data.data.message;
			}
		});
	}
});


