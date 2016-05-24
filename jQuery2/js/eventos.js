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



		/*
		if(usuario =="pw" && clave == "1234")
		{
			alert("Bienvenido "+ usuario);
			$("#datosUsuario").hide();
			$("nav").show("slow");
		}else{
			alert("Usuario y/o contraseña incorrectos!!");
		}
		*/

		//Verificar usuario y contraseña.

		var parametros= "accion=validaEntrada"+
					"&usuario="+usuario+ "&clave="+clave +"&id="+Math.random();
		$.ajax({
			beforeSend:function(){
				//Validar al usuario
				console.log("Validar al usuario");
			},
			cache: false,
			type: "POST",
			dataType:"json",
			url: "php/funciones.php",
			data: parametros,
			success: function(response){
				if(response.respuesta == true )
				{
					$("#datosUsuario").hide();
					$("nav").show("slow");
				}else
				 	alert("Usuario/Clave incorrectos!! ");
			},
			error: function(xhr,ajaxOptions, thrownError){
				console.log("Algo salio mal");
			}
		});
		console.log("Se disparó el submit");
	}

	var Altas = function(){
		//Mostramos el formulario
		$("#altaUsuarios").show("slow");
		$("#altaUsuarios h2").html("Alta Usuarios");

		//apago la funcion de alta de usuarios
		$("frmAltaUsuarios").off("submit",BajaUsuarios);  //(Aqui se apaga la funcion de Bajas en ese boton)
	

		//Enciendo la funcion de Baja Usuario 
		//en el mismo boton (el submit)
		
		$("#frmAltaUsuarios").on("submit",AltaUsuarios);  	 //(Aqui prende el boiton de Alta)
	}

	var AltaUsuarios = function ()
	{
		$("btnAltaUsuario").on("submit",AltaUsuarios);
		//alert($("#frmAltaUsuarios").serialize());
		

		var datos=$("#frmAltaUsuarios").serialize();
		var parametros ="accion=guardaUsuario&"+datos+"&id="+Math.random();   //importante, el & despues de GuardaUsuarios

		$.ajax({
			beforeSend:function(){
				//Validar al usuario
				console.log("Alta usuario");
			},
			cache: false,
			type: "POST",
			dataType:"json",
			url: "php/funciones.php",
			data: parametros,
			success: function(response){
				if(response.respuesta == true){
					alert("Usuario registrado Correctamente");
				}
				else{
					alert("No se pudo guardar la informacion")
				}
			},
			error: function(xhr,ajaxOptions,thrownError){
				console.log("Hay errores en php!");
			}
		});
	
	}

	var Bajas = function()
	{
		$("#altaUsuarios").show("slow");
		$("#altaUsuarios h2").html("Baja de Usuarios");  //Asi podemos referenciar a un objeto del index.html
		//apago la funcion de alta de usuarios
		$("#frmAltaUsuarios".off("submit",AltaUsuarios));
		//Enciendo la funcion de Baja Usuario 
		//en el mismo boton (el submit)
		$("#frmAltaUsuarios").on("submit",BajaUsuarios);
	}

/*
+	var BajaUsuario = function()
+	{
+		event.preventDefault();
+		//var datos = $("#frmAltaUsuarios").serialize();
+		var datos = "txtNombreUsuario="+$("#txtNombreUsuario").val();
+		var parametros = "accion=bajaUsuario&"+datos+
+		                 "&id="+Math.random();
+		$.ajax({
+			beforeSend:function(){
+				console.log("Baja al usuario");
+			},
+			cache: false,
+			type: "POST",
+			dataType: "json",
+			url:"php/funciones.php",
+			data:parametros,
+			success: function(response){
+				if(response.respuesta == true )//¬¬
+				{
+					alert("Usuario dado de baja correctamente");
+				}
+				else
+				{
+					alert("No se pudo dar de baja la información");
+				}
+			},
+			error: function(xhr,ajax,thrownError){
+
+			}
+		});
+	} */

	var BajaUsuarios = function () 
	{
		event.preventDefault();

		//copiamos todo lo de AltaUsuarios
		//var datos=$("#frmAltaUsuarios").serialize();

		var datos= "txtNombreUsuario="+$("#txtNombreUsuario").val();
		var parametros ="accion=BajaUsuarios&"+datos+"&id="+Math.random();   //importante, el & despues de GuardaUsuarios

		$ajax({
			beforeSend:function(){
				//Validar al usuario
				console.log("Baja usuario");
			},
			cache: false,
			type: "POST",
			dataType:"json",
			url: "php/funciones.php",
			data: parametros,
			success: function(response){
				if(response.respuesta == true){
					alert("Usuario dado de Baja Correctamente");
				}
				else{
					alert("No se pudo guardar la informacion")
				}
			},
			error: function(xhr,ajaxOptions,thrownError){
				console.log("Hay errores en php!");
			}
		});
	}

	var Consultas = function()
	{
		$("#consultasUsuarios").show("slow");
		var parametros  = "accion=consultas"+"&id="+Math.random;

		$.ajax({
			beforeSend:function(){
				//Validar al usuario
				console.log("Consulta de usuario");
			},
			cache: false,
			type: "POST",
			dataType:"json",
			url: "php/funciones.php",
			data: parametros,

			success: function(response){
				//console.log(response.log);
				if(response.respuesta == true){
					$("#tablaConsultas").html(response.tabla);
					//$("#tablaConsultas").append(response.tablaConsultas);  //Esto del html en "" es para limpiar la tabla, con el append se refrescaria la pagina

				}
			},
			error: function(xhr,ajaxOptions,thrownError){
				console.log("Ha ocurrido un error");
			}

		});
	}

	var BajaDinamica = function()
	{
		var usuario = $(this).attr(id);
		alert(usuario);
		//con el This se viene el objeto al q dimos click
		var parametros ="accion=BajaUsuarios("+usuario+")&"+"&id="+Math.random();   //importante, el & despues de GuardaUsuarios

		$ajax({
			beforeSend:function(){
				//Validar al usuario
				console.log("Baja dinamica de usuario");
			},
			cache: false,
			type: "POST",
			dataType:"json",
			url: "php/funciones.php",
			data: parametros,
			success: function(response){
				if(response.respuesta == true){
					alert("Usuario dado de Baja Correctamente");
				}
				else{
					alert("No se pudo guardar la informacion")
				}
			},
			error: function(xhr,ajaxOptions,thrownError){
				console.log("Hay errores en php!");
			}
		});
		
	}
	$("#frmValidaEntrada").on("submit",validaEntrada);
	$("#btnAltas").on("click",Altas);
	$("#frmAltaUsuarios").on("submit",AltaUsuarios);
	$("#btnBajas").on("click",Bajas);
	$("#btnConsultas").on("click",Consultas);

	//Eventos Dinamicos
	$("#tablaConsultas").on("button","click",BajaDinamica);
	//otra forma
	//$("#tablaConsultas > input").on("click",BajaDinamica);
}
$(document).on("ready",iniciaApp);
