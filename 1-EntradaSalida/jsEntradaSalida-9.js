/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var sueldo1;
	var resultado1;

	sueldo1=document.getElementById('sueldo').value;
	resultado1=sueldo1*1.1;

	document.getElementById('resultado').value="Su nuevo salario es de $"+resultado1;
	


	
}
