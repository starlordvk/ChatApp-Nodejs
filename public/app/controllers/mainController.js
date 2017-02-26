angular.module("mainController",[])


.controller('mainCtrl',function($http,$location,$timeout,$window){

var app=this;
app.errormsg=false;
	app.successMsg=false;
	app.loading=false;

	//setToken() method to set the login token in the browser
	this.setToken=function($window,token)
	{
		$window.localStorage.setItem("token",token);

	};

	//getToken() method to retrieve the token to check logged in status
	this.getToken=function()
	{
		return $window.localStorage.getItem("token");
	};


	//Checking logged in status
	if(app.getToken()){
		console.log("User is logged in");
	}
	else
	{
		console.log("User is not logged in");
	}


	//logout() method to logout on the click of logout button in index.html by removing the token from the browser
	this.logout=function(){
		localStorage.removeItem("token");
		$location.path("/logout");
		$timeout(function(){
			$location.path("/");
		},2000);
	};
	



//login() method
this.doLogin=function(loginData){
	


	//making an HTTP request to the backend
	$http.post('/api/authenticate',this.loginData).then(function(data){
		app.setToken($window,data.data.token);
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