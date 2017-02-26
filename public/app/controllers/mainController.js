angular.module("mainController",[])


.controller('mainCtrl',function($http,$location,$timeout){

var app=this;
app.errormsg=false;
	app.successMsg=false;
	app.loading=false;


this.doLogin=function(loginData){
	


	//making an HTTP request to the backend
	$http.post('/api/authenticate',this.loginData).then(function(data){
		app.loading=true;
		console.log("posting login request");
		if(data.data.success)
			{
				//Create success message and redirect to the homepage
				app.successMsg=data.data.message;
				

				console.log(app.errormsg);
console.log(app.successMsg);
console.log(app.loading);
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
		})	;
	}

});