var userServices=angular.module("userServices",[]);
console.log("inside user services");
userServices.factory("User",function($http){

	userfactory={};
	//User.create(regdata)
	userfactory.create=function(regData){
		return $http.post('/api/users',regData);
	}
	return userfactory;

});

