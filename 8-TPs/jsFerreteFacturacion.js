/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var numero1;
	var numero2;
	var numero3;
	var suma;

	numero1=document.getElementById('PrecioUno').value;
	numero2=document.getElementById('PrecioDos').value;
	numero3=document.getElementById('PrecioTres').value;

	suma=parseInt(numero1)+parseInt(numero2)+parseInt(numero3);
	alert("La suma es $"+suma);



	
}
function Promedio () 
{
	var numero1;
	var numero2;
	var numero3;
	var prom;
	var prome;

	numero1=document.getElementById('PrecioUno').value;
	numero2=document.getElementById('PrecioDos').value;
	numero3=document.getElementById('PrecioTres').value;
	prom=parseInt(numero1)+parseInt(numero2)+parseInt(numero3);
	prome=parseInt(prom)/3;
	alert("El promedio es $"+prome);



	
}
function PrecioFinal () 
{
	var numero1;
	var numero2;
	var numero3;
	var suma;

	numero1=document.getElementById('PrecioUno').value;
	numero2=document.getElementById('PrecioDos').value;
	numero3=document.getElementById('PrecioTres').value;
	suma=parseInt(numero1)*1.21+parseInt(numero2)*1.21+parseInt(numero3)*1.21;
	alert("El precio final es $"+suma);

	
}
