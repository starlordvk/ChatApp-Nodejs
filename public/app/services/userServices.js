angular.module("userServices",[]);
userServices.factory("User",function($http){

	userfactory={};
	//User.create(regdata)
	userfactory.create=function(regData){
		return $http.post('/api/users',regData);
	}
	return userfactory;

});

