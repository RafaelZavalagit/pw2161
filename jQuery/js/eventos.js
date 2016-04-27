var inicio=function()
{
	//preparar los eventos de todos mis objetos
	var clicBoton=function()
	{
		console.log("click del boton!!");
		$(".anuncioWeb").append("Click del Boton");
	}
	$("#miBoton").on("click",clicBoton);
	

}
//Main
$ (document).on("ready",inicio);
