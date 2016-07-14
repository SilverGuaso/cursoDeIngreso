function Mostrar()
{

var mes;
mes=document.getElementById('mes').value;

switch(mes)
{
	case "Febrero":alert(mes+" tiene 28 ó 29 días.");
	break;
	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":alert(mes+" tiene 30 días.");
	break;
	default:alert(mes+" tiene 31 días.");
	
}

	
	



}//FIN DE LA FUNCIÓN