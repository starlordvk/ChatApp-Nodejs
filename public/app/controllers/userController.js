var userController=angular.module("userController",[]);

userController.controller("regControl",function($http,$location,$timeout){

	var app=this;
	app.errormsg=false;
	app.successMsg=false;
	app.loading=false;
	 this.regUser=function(regData){
		
		//making an HTTP request to the backend
		$http.post('/api/users',this.regData).then(function(data){

			app.loading=true;
			//if user creation is successfull and json data received has success=trues
			if(data.data.success)
			{
				//Create success message and redirect to the homepage
				app.successMsg=data.data.message;
				

				// Delay for redirection to homepage
				$timeout(function()
					{
						app.successMsg="Redirecting";
						app.loading=false;
						$location.path("/")
					},2000);
				

			}
			else
			{
				app.errormsg=data.data.message;
				app.loading=false;
			}
		});
	}

	
});


