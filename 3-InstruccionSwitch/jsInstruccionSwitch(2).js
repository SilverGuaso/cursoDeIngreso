function Mostrar()
{

var mes;
mes= document.getElementById('mes').value;

switch(mes)
{
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":alert("Ya pasamos el frio, ahora el Calor!!");
	break;
	case "Julio":
	case "Agosto":alert("Abrigate que hace Frio!");
	break;
	default: alert("Falta para el Invierno.");
}





}//FIN DE LA FUNCIÓN