<?php 

function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
{
  $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;

  $theValue = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($theValue) : mysql_escape_string($theValue);

  switch ($theType) {
    case "text":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;    
    case "long":
    case "int":
      $theValue = ($theValue != "") ? intval($theValue) : "NULL";
      break;
    case "double":
      $theValue = ($theValue != "") ? "'" . doubleval($theValue) . "'" : "NULL";
      break;
    case "date":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;
    case "defined":
      $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
      break;
  }
  return $theValue;
}

function validaEntrada()
{
	$usuario = GetSQLValueString($_POST["usuario"],"text");
	$clave = GetSQLValueString(md5($_POST["clave"]),"text");
	$respuesta = false;

	//conectar el servidor de BD
	//servidor , usuario , clave 
	$conexion = mysql_connect("localhost","root","");
	//seleccionar la BD
	mysql_select_db("cursopw");
	$validar = sprintf( "select usuario,clave from usuarios where usuario=%s and clave=%s limit 1",$usuario,$clave) ;
	$resultado= mysql_query($validar);
	//preguntar si trajo al menos un registro
	if(mysql_num_rows($resultado) > 0){
		$respuesta = true;
	}
		
	$salidaJSON = array('respuesta' => $respuesta );
	//devolvemos el resultado a JavaScript
	print json_encode($salidaJSON);
}

function guardaUsuario(){
	$usuario = GetSQLValueString($_POST["txtNombreUsuario"],"text");
	$clave = GetSQLValueString(md5($_POST["txtClaveUsuario"]),"text");
	$tipo = GetSQLValueString($_POST["txtTipoUsuario"],"long");
	$depto = GetSQLValueString($_POST["txtDepartamentoUsuario"],"text");

	$respuesta = false;

	//conectar el servidor de BD
	//servidor , usuario , clave 
	$conexion = mysql_connect("localhost","root","");
	//seleccionar la BD
	mysql_select_db("cursopw");

	$guarda = sprintf("insert into usuarios values(%s,%s,%s,%s)",$usuario,$clave,$tipo,$depto);

	//ejecutamos la consulta
	mysql_query($guarda);

	if(mysql_affected_rows() > 0){
		$respuesta=true;
	}
	$salidaJSON = array('respuesta' => $respuesta);
	print json_encode($salidaJSON);
}

function bajaUsuarios(){
	$respuesta= false;
	$usuario = GetSQLValueString($_POST["txtNombreUsuario"],"text");
	mysql_connect("localhost","root","");
	mysql_select_db("cursopw");

	$consultaBaja= sprintf("delete from usuarios where usuario=%s limit 1",$usuario);

	// $conbsultaBaja= sprintf("update from usuarios set tipousuario='baja' where usuario=%s",$usuarios);
	mysql_query($consultaBaja);
	if(mysql_affected_rows() > 0) {
		$respuesta=true;
	}
		
	$salidaJSON = array ('respuesta' => $respuesta);
	print json_encode($salidaJSON);

}
function BajaDinamica($usuario){
	$respuesta=false;
	mysql_connect("localhost","root","");
	mysql_select_db("cursopw");

	$consultaBaja= sprintf("delete from usuarios where usuario=%s limit 1",$usuario);

	// $conbsultaBaja= sprintf("update from usuarios set tipousuario='baja' where usuario=%s",$usuarios);
	mysql_query($consultaBaja);
	if(mysql_affected_rows() > 0) {
		$respuesta=true;
	}
		
	$salidaJSON = array ('respuesta' => $respuesta);
	print json_encode($salidaJSON);
}
function consultas(){
	$respuesta=false;
	mysql_connect("localhost","root","");
	mysql_select_db("cursopw");

	$consulta ="select * from usuarios order by usuario";
	
	$resultado=mysql_query($consulta);
	$tabla = "";

	if(mysql_num_rows($resultado) > 0)
	{
		$respuesta = true;
		$tabla.= "<tr>";
		$tabla.="<th>Usuario</th>";
		$tabla.="<th>Tipo Usuario</th>";
		$tabla.="<th>Departamento</th>";
		$tabla.="<th>Acciones </th>";
		while( $registro = mysql_fetch_array($resultado))  //en este while el registro va tomando el valor de los objetos de tippo usuario.
		{
			$tabla.= "<tr>";
			$tabla.= "<td>".$registro["usuario"]."<td>";
			$tabla.= "<td>".$registro["tipousuario"]."<td>";
			$tabla.= "<td>".$registro["departamento"]."<td>";
			$tabla.="<td><button id='".$registro["usuario"]."' class='btn btn-danger'>Baja</button></td>";
			$tabla.="</tr>";
		}
	}
	$salidaJSON = array('respuesta' => $respuesta,
						'tabla' => $tabla);
	print json_encode($salidaJSON);
		
}

$accion = $_POST["accion"];
//menu principal

switch ($accion) {
	case 'validaEntrada':
		validaEntrada();		//# code...
		break;
	case 'guardaUsuario':
		guardaUsuario();
		break;
	case 'bajaUsuarios':
		BajaUsuario();
		break;
	case 'consultas':
		consultas();
		break;
	default:
		# code...
		break;
}
