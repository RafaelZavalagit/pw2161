var iniciaApp = function()
{
	var validaEntrada = function()
	{
		event.preventDefault();  //invalida los eventos que no corresponden a esta funcion!
		
		var usuario = $("#txtUsuario").val();
		var clave = $("#txtClave").val();

		//Validaciones
		//1-Que no estén vacíos
		if(usuario == "")
		{
			alert("El usuario no debe ser vacío");
			$("#txtUsuario").focus();
		}
		if(clave == "")
		{
			alert("La clave no ser vacía");
			$("#txtClave").focus();
		}

		if(usuario =="pw" && clave == "1234")
		{
			alert("Bienvenido "+ usuario);
			$("#datosUsuario").hide();
			$("nav").show("slow");
		}else{
			alert("Usuario y/o contraseña incorrectos!!");
		}
		console.log("Se disparó el submit");
	}
	$("#frmValidaEntrada").on("submit",validaEntrada);
}
$(document).on("ready",iniciaApp);