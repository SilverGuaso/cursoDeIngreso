/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var resultado;
var numero1;
var numero2;
var operador;
function comenzar()
{
	
	numero1=Math.floor(Math.random()*10+1);
	document.getElementById('PrimerNumero').value=numero1;
	numero2=Math.floor(Math.random()*10+1);
	document.getElementById('SegundoNumero').value=numero2;
	operador=Math.floor(Math.random()*4+1);
	if (operador==4)
	 {
	 	document.getElementById('Operador').value="SUMAR";
	 	resultado=parseInt(numero1)+parseInt(numero2);
	 }
	 else
	 {
	 	if (operador==3)
	 	 {
	 	 	document.getElementById('Operador').value="RESTAR";
	 	 	resultado=numero1-numero2;
	 	 }
	 	 else
	 	 {
	 	 	if (operador==2)
	 	 	 {
	 	 	 	document.getElementById('Operador').value="MULTIPLICAR";
	 	 	 	resultado=numero1*numero2;
	 	 	 }
	 	 	 else
	 	 	 {
	 	 	 	document.getElementById('Operador').value="DIVIDIR";
	 	 	 	resultado=Math.floor(numero1/numero2); //con el Math.floor() para que de el numero entero
	 	 	 }
	 	 }
	 }


	

}//FIN DE LA FUNCIÓN
function Responder()
{
	respuesta=document.getElementById('Respuesta').value;
	
	if (respuesta!=resultado)
	 {
	 	alert("La respuesta es incorrecta. La correcta seria: "+resultado);
	 }
	 else
	 {
	 	alert("La respuesta es CORRECTA!");
	 }

}//FIN DE LA FUNCIÓN
