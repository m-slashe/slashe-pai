angular.module('templates-main', ['src/template/home.html']);

angular.module("src/template/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/template/home.html",
    "<div>\n" +
    "	<div>\n" +
    "		<label for=\"usuario\" >Usuario : </label>\n" +
    "		<input id=\"usuario\" type=\"text\" ng-value=\"usuario\">\n" +
    "	</div>\n" +
    "	<div>\n" +
    "		<label for=\"senha\" >Senha : </label>\n" +
    "		<input id=\"senha\" type=\"password\" ng-value=\"senha\">\n" +
    "	</div>		\n" +
    "	<button ng-click=\"login(usuario,senha)\">Logar</button>\n" +
    "</div>\n" +
    "");
}]);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////Do First
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var modules = ['ui.router'];
try{
	angular.module('templates-main');
	modules.push('templates-main');
}catch(err){};

try{
	principaisModulos.forEach(function(modulo){
		modules.push(modulo);
	})
}catch(err){};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////Config
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var principalModule = angular.module('principal',modules);

principalModule.config(principalConfig);

principalConfig.$inject = ['$stateProvider','$urlRouterProvider'];
function principalConfig($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home',{
			url : '/home',
			templateUrl: 'src/template/home.html',
			controller : 'homeController'
		});

	$urlRouterProvider.otherwise('home');
}
principalModule.run(principalRun);

function principalRun(){
	console.log('Run Login');
}
principalModule.controller('homeController',Home);

Home.$inject = ['$scope','$state'];

function Home($scope,$state){

	$scope.login = function(username,password){
		try{
			$state.go('operacao');
		}catch(err){
			alert('Crie seu próprio state :D');
		}
	}
}
principalModule.service('principalService',principalService);

principalService.$inject = [];
function principalService(){
	
	this.soma = function(numero1,numero2){
		return numero1 + numero2;
	}
}
