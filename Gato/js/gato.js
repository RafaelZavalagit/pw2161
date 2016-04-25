//Variables globales


var turno=false;
var letraCasilla="";
var cuentaJuego=0;
var cuentaJugadas=0;

function iniciaGato()
{
	//En construccion 
}
function escribe(casilla)
{
	var letra="";
	letraCasilla=document.getElementById(casilla).innerHTML;
	if(letraCasilla=="&nbsp;")
	{
		if (turno==false)
		{
			letra="X";
		}
		else
		{
			letra="O"
		}
		document.getElementById(casilla).innerHTML =letra;
		turno=!turno;
	}
	cuentaJugadas++; //para saber quien gano, validamos la jugada
	validaJugada(letra);
}
function validaJugada(valor)
{
	var ganador=false;
	var b11=document.getElementById("unouno").innerHTML;
	var b12=document.getElementById("unodos").innerHTML;
	var b13=document.getElementById("unotres").innerHTML;
	var b21=document.getElementById("dosuno").innerHTML;
	var b22=document.getElementById("dosdos").innerHTML;
	var b23=document.getElementById("dostres").innerHTML;
	var b31=document.getElementById("tresuno").innerHTML;
	var b32=document.getElementById("tresdos").innerHTML;
	var b33=document.getElementById("trestres").innerHTML;

	if(b11==b12 &&b12==b13&& b13!="&nbsp;")
		ganador=true;
	if(b11==b22 &&b22==b23&& b23!="&nbsp;")
		ganador=true;
	if(b11==b32 &&b12==b33&& b33!="&nbsp;")
		ganador=true;
	if(b11==b21 &&b21==b31&& b31!="&nbsp;")
		ganador=true;
	if(b12==b22 &&b22==b32&& b32!="&nbsp;")
		ganador=true;
	if(b13==b23 &&b13==bb33&& b33!="&nbsp;")
		ganador=true;
	if(b11==b22 &&b22==b33&& b33!="&nbsp;")
		ganador=true;
	if(b13==b22 &&b22==b31&& b13!="&nbsp;")
		ganador=true;
	

	if(ganador==true)
	{
		alert("Ganador: "+letra);
	}else if(ganador==false && cuentaJugadas==9){
		alert("Empate!!!");
	}
}
