
var contador=1;
var cuentajuegos=1;
function seleccion(valor,id)
{	
	
	
	if(valor=="")
		if(contador %2 ==0)
		{
			document.getElementById(id).value="O";
			contador++;
		}
		else
		{
			document.getElementById(id).value="X";
			contador++;
		}
		checar();

		
}
function ganadores(id1,id2,id3) //  para cambiar los colores de los botones de ganadores ganadores('s11','s12','s13');
{
	document.getElementById(id1).style.background=red;
	document.getElementById(id2).style.background=red;
	document.getElementById(id3).style.background=red;
}
function checar()
{
	var ganador=false;
	if(contador>=5)
	{
		if((document.getElementById('s11').value==document.getElementById('s12').value)&&(document.getElementById('s12').value==document.getElementById('s13').value)&&document.getElementById('s11').value!=""&&ganador==false)
		{
			alert("El jugador con "+document.getElementById('s11').value+" es el Ganador");
			location.reload();
			ganador=true;
			contador=0;
			

		}
		if((document.getElementById('s21').value==document.getElementById('s22').value)&&(document.getElementById('s22').value==document.getElementById('s23').value)&&document.getElementById('s21').value!=""&&ganador==false)
		{
			alert("El jugador con "+document.getElementById('s21').value+" es el Ganador");
			location.reload();
			ganador=true;
			contador=0;

		}
		if((document.getElementById('s31').value==document.getElementById('s32').value)&&(document.getElementById('s32').value==document.getElementById('s33').value)&&document.getElementById('s31').value!=""&&ganador==false)
		{
			alert("El jugador con "+document.getElementById('s31').value+" es el Ganador");
			location.reload();
			ganador=true;
			contador=0;

		}
		if((document.getElementById('s11').value==document.getElementById('s21').value)&&(document.getElementById('s21').value==document.getElementById('s31').value)&&document.getElementById('s11').value!=""&&ganador==false)
		{
			alert("El jugador con "+document.getElementById('s11').value+" es el Ganador");
			location.reload();
			ganador=true;
			contador=0;

		}
		if((document.getElementById('s12').value==document.getElementById('s22').value)&&(document.getElementById('s22').value==document.getElementById('s32').value)&&document.getElementById('s22').value!=""&&ganador==false)
		{
			alert("El jugador con "+document.getElementById('s22').value+" es el Ganador");
			location.reload();
			ganador=true;
			contador=0;

		}
		if((document.getElementById('s13').value==document.getElementById('s23').value)&&(document.getElementById('s23').value==document.getElementById('s33').value)&&document.getElementById('s33').value!=""&&ganador==false)
		{
			alert("El jugador con "+document.getElementById('s33').value+" es el Ganador");
			location.reload();
			ganador=true;
			contador=0;

		}
		if((document.getElementById('s11').value==document.getElementById('s22').value)&&(document.getElementById('s22').value==document.getElementById('s33').value)&&document.getElementById('s11').value!=""&&ganador==false)
		{
			alert("El jugador con "+document.getElementById('s11').value+" es el Ganador");
			location.reload();
			ganador=true;
			contador=0;

		}
		if((document.getElementById('s31').value==document.getElementById('s22').value)&&(document.getElementById('s22').value==document.getElementById('s13').value)&&document.getElementById('s13').value!=""&&ganador==false)
		{
			alert("El jugador con "+document.getElementById('s13').value+" es el Ganador");
			location.reload();
			ganador=true;
			contador=0;

		}

	}
	if(contador==10){
		alert("No hay ganador!! ")
		location.reload();
	}
		
		
		
}
function refrescar()
{
	location.reload();
}