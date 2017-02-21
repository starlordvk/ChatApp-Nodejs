var userServices=angular.module("userServices",[]);

userServices.factory("User",function(){

	userfactory={};

	userfactory.create=function(){
		return $http.post('/api/users',regData);
	}
	return userfactory;

});

