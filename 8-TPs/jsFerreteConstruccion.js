/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var base;
	var altura;
	var resultado;

	base=document.getElementById('Largo').value;
	altura=document.getElementById('Ancho').value;
	resultado=((parseInt(base)*2)+(parseInt(altura)*2))*3;
	alert("La cantidad a comprar es "+resultado+" mts.");



}
function Circulo () 
{
	var perimetro;
	var resultado;

	perimetro=document.getElementById('Radio').value;
	resultado=(parseInt(perimetro)*Math.PI*2)*3;
	alert("El perimetro es de "+resultado);
	
}
function Materiales () 
{
	var base;
	var altura;
	var resultado;
	var cemento;
	var cal;
	base=document.getElementById('Largo').value;
	altura=document.getElementById('Ancho').value;
	resultado=parseInt(base)*parseInt(altura);
	cemento=parseInt(resultado)*2;
	cal=parseInt(resultado)*3;

	alert("Se necesitan "+cemento+" bolsas de cemento y "+cal+" de cal.");
	

}