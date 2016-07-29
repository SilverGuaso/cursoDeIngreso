//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
/*function Mostar()
{
	alert("Esto funciona de maravilla");
}
//solo estoy haciendo esto para probar el pull 
//de git. actualizar desde la nube a la computadora
*/
/* PRIMER EJERCICIO DEL PARCIAL
function Mostar()
{
	var importe;
	
	var contador;
	contador=0;
	var acumulador;
	acumulador=0;
	while(contador<24)
	{
		contador++;
		
		importe=prompt("ingrese"+contador);
		acumulador=acumulador+parseInt(importe);
		while(importe==0)
		{
			alert("Ingrese un numero distinto de cero");
			importe=prompt("ingrese"+contador);
		}
	}
	alert(acumulador);
}
*/
function Mostar() //SEGUNDO EJERCICIO DEL PARCIAL
{
	var contador;
	contador=0;
	var nota;
	var sexo;
	var acumuladorNota;
	acumuladorNota=0;
	var promedio;
	var contadorM;
	contadorM=0;
	
	while(contador<10)
	{
		contador++;
		nota=prompt("ingrese su nota"+contador);
		acumuladorNota=acumuladorNota+parseInt(nota);
		while(nota<0 || nota>10)
		{
			nota=prompt("ingrese su nota"+contador,"entre 0 y 10");
		}
		sexo=prompt("ingrese su sexo","M o F");
		while(sexo!="M" && sexo!="F")
		{
			sexo=prompt("ReIngrese su sexo","M o F");
		}
		if (nota>=6 && sexo=="M")
		 {
		 	contadorM++;
		 	
		 }
	}
	promedio=acumuladorNota/contador;
	alert("El promedio de nota es de "+promedio);
	if (contadorM>0)
	 {
	 	alert("La cantidad de hombres con nota igual o mayor a seis es: "+contadorM);
	 }
	
}