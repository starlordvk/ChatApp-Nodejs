angular.module('authServices',[])
.factory("AuthToken",function(){

var authTokenFactory={};

authTokenFactory.setToken=function(token)
{
 
	$window.localStorage.setItem("token",token);
};
authTokenFactory.getToken=function(){
	return $window.localStorage.getItem("token")
}

return authTokenFactory;

});