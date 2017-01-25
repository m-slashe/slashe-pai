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