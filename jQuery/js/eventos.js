var inicio=function()
{
	//preparar los eventos de todos mis objetos
	var clicBoton=function()
	{
		console.log("click del boton!!");
		$(".anuncioWeb").append("Click del Boton");
	}
	var clicBoton2 =function()
	{
		alert("Boton 2");
	}	
	var teclaunInput = function(tecla)
	{
		if(tecla.which == 13)
		{

			//que se posicione en el segundo input.
			$("#otroInput").focus();
		}
	}

	
	$("#miBoton").off("click",clicBoton);
	$("#miBoton").on("click",clicBoton2);
$("#unInput").on("keypress",teclaunInput);
	

}

//Main
$ (document).on("ready",inicio);

