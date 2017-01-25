principalModule.service('principalService',principalService);

principalService.$inject = [];
function principalService(){
	
	this.soma = function(numero1,numero2){
		return numero1 + numero2;
	}
}
