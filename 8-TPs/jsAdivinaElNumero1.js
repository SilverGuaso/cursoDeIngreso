/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
contadorIntentos=1;

function comenzar()
{
	numeroSecreto=Math.floor(Math.random()*100)+1;//Genero el número RANDOM entre 1 y 100
	 
	//alert(numeroSecreto);	//alert(numeroSecreto );
}

function verificar()
{
	var numero;
	numero=document.getElementById('numero').value;
	var numerosuperior;
	var numeroinferior;
	while(numero!=numeroSecreto)
	{
		document.getElementById('intentos').value=contadorIntentos++
		if (numero>numeroSecreto)
		 {
		 	numerosuperior=parseInt(numero)-parseInt(numeroSecreto);
		 	alert("Se pasó "+numerosuperior+" Números.");
		 	numero=prompt("Ingrese otro numero");
		 }
		 else
		 {
		 	numeroinferior=parseInt(numeroSecreto)-parseInt(numero);
		 	alert("Le faltaron "+numeroinferior+" Números");
		 	numero=prompt("Ingrese otro numero");
		 }	
	}

	alert("Usted adivinó el Numero Secreto: "+numero+" en "+contadorIntentos+" intentos.");
	document.getElementById('intentos').value=contadorIntentos;
	document.getElementById('numero').value=numero;
}
/*Una vez finalizado el juego. si vuelvo a comenzarlo sin recargar la pagina, el contador de intentos
no vuelve a 0. continua en el valor que habia quedado al finalizar el juego anterior*/
