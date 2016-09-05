do{var primerNumero = Number(prompt("ingrese un número"));
var operacion = prompt("ingrese una operación","suma, resta, multiplicación o división").toLowerCase();
var segundoNumero = Number(prompt("ingrese otro número"));
var resultado
if (operacion == "suma"|| operacion=="+") {
	var resultado = primerNumero+segundoNumero;

	}else if (operacion=="resta" || operacion=="-" ) {
		var resultado = primerNumero-segundoNumero;

	}else if (operacion=="multiplicación" || operacion=="multipliacion" || operacion=="*" || operacion=="x" ) {
		var resultado = primerNumero*segundoNumero;

	}else if (operacion=="división" || operacion=="division" || operacion=="" || operacion=="%") {
		var resultado = primerNumero/segundoNumero;
		
	}else{console.log("no has ingresado una operación válida")};

alert("tu resultado es "+resultado);
var deNuevo = confirm("¿desea hacer otro calculo?");
}while(deNuevo==true);