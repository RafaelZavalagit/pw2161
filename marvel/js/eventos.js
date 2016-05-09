var inicio = function()
{
	var clicBoton = function()
	{
		$.ajax({
				beforeSend:function(){
					console.log("Espere...");
				},
			  url: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=917a152f0e410214e0bec334a3bf6128&hash=64c0db5c2d22a1c31bf436e4ecc37edd&nameStartsWith='
			  +document.getElementById("busqueda").value,
			  dataType: 'json',
			  success: function(data){
			  console.log(data);
			  //alert(data.results[0].name.first+" "+data.results[0].name.last);
			  $("#imagenPersonaje").attr("src",data.data.results[0].thumbnail.path+"."+data.data.results[0].thumbnail.extension);
			  $("#descripcionPersonaje").html(data.data.results[0].description);
			  $("#nombrePersonaje").html(data.data.results[0].name);			  
			  },
			  error:function(xhr,error,throws){
			  	console.log("Ocurrió un error");
			  }
		})
	}
	$("#miBoton").on("click",clicBoton);
}
//MAin
$(document).on("ready",inicio);