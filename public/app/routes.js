var appRoutes=angular.module("appRoutes",["ngRoute"])

appRoutes.config(function($routeProvider,$locationProvider){

$routeProvider
	.when('/',{
	templateUrl:"app/views/pages/home.html"
	})

	.when("/about",{
		templateUrl:"app/views/pages/about.html"
	})

	.when("/contact",{
		templateUrl:"app/views/pages/contact.html"
	})

	.when("/register",{
		templateUrl:"app/views/pages/users/register.html",
		controller:"regControl",
		controllerAs:"register"
	})


	.when("/login",{
		templateUrl:"app/views/pages/users/login.html",
		controller:"mainCtrl",
		controllerAs:"logincontrol"
	})


	.otherwise({redirectTo:"/"});

	$locationProvider.html5Mode({
 	 enabled: true,
 	 requireBase: false
	});

});