function Mostrar()
{
/*	alert('iteración while');
var contador;
contador=0;
if (contador<10)
 {
 	alert("mensaje "+contador);
	contador=contador+1//variable= variable + valor literal

 }

if (contador<10)
 {
 	alert("mesaje "+contador);
 	contador=contador+1//variable= variable + valor literal

 }

 if (contador<10)
 {
 	alert("mesaje "+contador);
 	contador=contador+1//variable= variable + valor literal

 }

 if (contador<10)
 {
 	alert("mesaje "+contador);
 	contador=contador+1//variable= variable + valor literal

 }
 if (contador<10)
 {
 	alert("mesaje "+contador);
 	contador=contador+1//variable= variable + valor literal

 }
 if (contador<10)
 {
 	alert("mesaje "+contador);
 	contador=contador+1//variable= variable + valor literal

 }
 if (contador<10)
 {
 	alert("mesaje "+contador);
 	contador=contador+1//variable= variable + valor literal

 }
 if (contador<10)
 {
 	alert("mesaje "+contador);
 	contador=contador+1//variable= variable + valor literal

 }
 if (contador<10)
 {
 	alert("mesaje "+contador);
 	contador=contador+1//variable= variable + valor literal

 }
 if (contador<10)
 {
 	alert("mesaje "+contador);
 	contador=contador+1//variable= variable + valor literal

 }
 if (contador<10)
 {
 	alert("mesaje "+contador);
 	contador=contador+1//variable= variable + valor literal

 } NO HACER ITERACIONES CON IF*/

var contador;
contador=0
/* while (contador<3)
 {
 	alert("mesaje "+contador);
 	contador=contador+1//variable= variable + valor literal
 }
*/
/*	while(true)
	{
		alert("mensaje "+contador);
		contador=contador+1;
		if (contador==3)
		 {
		 	break;
		 }
		
	}
*/
while (true)
{
	contador=contador+1;
	if (contador==3)
	 {
	 	continue;//cuando el contador llega a tres vuelve a empezar el while. en el break SALE del while.
	 }
	 alert("while"+contador);
	 if (contador==6)
	  {
	  	break;
	  }
	  alert("fin"+contador);
}

}//FIN DE LA FUNCIÓN