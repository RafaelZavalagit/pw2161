//variable global
var operador="";
function numeros(num)
{
	var valor=document.calculadora.operando1.value;
	if(operador=="") //escribir en el operando1
	{
		if(valor=="0") //vaciamos la caja
		{
			document.calculadora.operando1.value="";	
		}
		document.calculadora.operando1.value=
		document.calculadora.operando1 +num;
	}
	else //escribir en el operando2
	{
		if(valor=="0") //vaciamos la caja
		{
			document.calculadora.operando2.value="";	
		}
		document.calculadora.operando2.value=
		document.calculadora.operando2.value +num;
	}          
}
function borrar()
{
	operador = "";

	document.calculadora.operando1.value=0;
	document.calculadora.operando2.value=0;
	document.calculadora.resultado.value=0;
}
function operadores(ope)
{
	alert(ope);
}
function igual()
{
	var valor1=document.calculadora.operando1.value;
	var valor2=document.calculadora.operando2.value;

	var resultado;
	operador=document.calculadora.operador.value=
	eval(operando1+operador+operando2);	
	//eval es una funcion que evaula cualquier operacion matematica
}