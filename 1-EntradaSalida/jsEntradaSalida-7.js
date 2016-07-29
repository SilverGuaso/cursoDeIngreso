/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
/*
function sumar()
{	
	var numero1;
	var numero2;
	var resultado1;

	numero1=document.getElementById('numeroUno').value;

	numero2=document.getElementById('numeroDos').value;

	resultado=parseInt(numero1)+parseInt(numero2);
	alert("La suma es de: "+resultado);

}

function restar()
{
	var numero1;
	var numero2;
	var resultado;

	numero1=document.getElementById('numeroUno').value;
	numero2=document.getElementById('numeroDos').value;
	resultado=parseInt(numero1)-parseInt(numero2);
	alert("La resta es de "+resultado);

	
}

function multiplicar()
{ 
	var numero1;
	var numero2;
	var resultado;

	numero1=document.getElementById('numeroUno').value;
	numero2=document.getElementById('numeroDos').value;
	resultado=parseInt(numero1)*parseInt(numero2);
	alert("La multiplicación es de "+resultado);

	
}

function dividir()
{
	var numero1;
	var numero2;
	var resultado;

	numero1=document.getElementById('numeroUno').value;
	numero2=document.getElementById('numeroDos').value;
	resultado=parseInt(numero1)/parseInt(numero2);
	alert("La división es de "+resultado);
	
}
*/
var numero;//TERCER EJERCICIO PARCIAL
var acumulador;
acumulador=0;
var contador;
contador=0;
var contadorPares;
contadorPares=0;
var promedio;

function sumar()
{	
	contador++;
	numero=prompt("ingrese un numero");
	while(numero<0)
	{
		numero=prompt("ingrese un numero positivo");
	}
	acumulador=acumulador+parseInt(numero);
	if (numero%2==0)
	 {
	 	contadorPares++;
	 }
	 promedio=acumulador/contador;
}

function restar()
{
	document.write(contadorPares+" Numeros pares ingresados"+" El promedio es "+promedio+" La suma de los numeros es "+acumulador);
	
		
}

