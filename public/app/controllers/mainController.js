angular.module("mainController",[])


.controller('mainCtrl',function($http,$location,$timeout,$window,$scope){

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


	

	//logout() method to logout on the click of logout button in index.html by removing the token from the browser
	this.logout=function(){
		localStorage.removeItem("token");
		$location.path("/logout");
		$timeout(function(){
			$location.path("/");
		},2000);
	};
	
	this.attachToken=function(config)
	{
		var token=app.getToken();
		if(token)
		{
			config.headers['x-access-token']=token;
		}
		return config;
	}


		//Checking logged in status
	if(app.getToken()){
		console.log("User is logged in");
		console.log($http.post('/api/me'));
		$scope.getUserName = function(){
   				 $http({
     			 url: '/api/me',
      			 method: 'post',
      			 headers:{
        				'x-access-token': datas
      						}
    				}).then(function(response){
      $scope.data = response;
      console.log(scope.data);
    });
   	}
	}
	else
	{
		console.log("User is not logged in");

	}

		
	
		
			


		



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
				app.loading=false;
				app.successMsg=data.data.message;
				

				console.log(app.errormsg);
console.log(app.successMsg);
console.log(app.loading);
				// Delay for redirection to homepage
				$timeout(function()
					{
						app.successMsg="Redirecting";
						
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