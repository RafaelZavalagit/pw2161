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
		$.ajax({
		beforeSend:function(){
			console.log("Espere..");
		},
		  url: 'https://randomuser.me/api/',
		  dataType: 'json',
		  success: function(data){
		  	console.log(data);
		 // alert(data.results[0].name.first +" "+data.results[0].name.last);
		 	//Mostramos la informacion en el HTML
		 	$("#fotoPersona").attr("src",data.results[0].picture.large);
		 	$("#txtNombreUser").html(data.results[0].name.first);
		 	$("#txtApellidoUser").html(data.results[0].name.last);
		 
		  },
		  error:function(xhr,error,throws){
		  	console.log("Hay algun error..");
		  }
		});

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

