/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function CentigradosFahrenheit () 
{
	var grados;
	var resultado;

	grados=document.getElementById('Temperatura').value;
	resultado=(parseInt(grados)*1.8)+32;
	alert(grados+"ºC es igual a "+resultado+"ºF.");



}

function FahrenheitCentigrados () 
{
	var grados;
	var resultado;

	grados=document.getElementById('Temperatura').value;
	resultado=(parseInt(grados)-32)/1.8;

	alert(grados+"ºF es igual a "+resultado+"ºC.");

}
