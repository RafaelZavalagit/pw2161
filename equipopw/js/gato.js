
var contador=1;
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
		
}
function checar()
{

}