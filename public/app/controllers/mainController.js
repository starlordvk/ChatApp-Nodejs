var mainController=angular.module("mainController",[]);

mainController.controller('mainCtrl',function($http,$location,$timeout){

var app=this;
app.errormsg=false;
	app.successMsg=false;
	app.loading=true;

this.doLogin=function(loginData){
	
	console.log("Inside dologin");

	//making an HTTP request to the backend
	$http.post('/api/authenticate',this.loginData).then(function(data){

		if(data.data.success)
			{
				//Create success message and redirect to the homepage
				app.successMsg=data.data.message;
				

				// Delay for redirection to homepage
				$timeout(function()
					{
						app.successMsg="Redirecting";
						app.loading=false;
						$location.path("/about")
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