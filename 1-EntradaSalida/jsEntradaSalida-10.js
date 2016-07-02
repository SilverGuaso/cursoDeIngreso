/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var numero1;
	var descuento;

	numero1=document.getElementById('importe').value;
	descuento=parseInt(numero1)*0.75;

	document.getElementById('resultado').value=descuento;
	


}
