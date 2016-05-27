function Vehiculo(){
	this.name = "vehiculo";
	this.arrancar = function (){
		console.log("arrancando el vehiculo");
	};
	this.parar = function (){
		console.log("parando el vehiculo");
	};
}

// Auto hereda de Vehiculo
function Auto(name){
	this.name = name;
	this.arrancar = function (){
		console.log("arrancando el Auto");
	};
}

// defino la herencia
Auto.prototype = new Vehiculo();

// --------------


var autoBMW = new Auto();
var autoVW = new Auto();
