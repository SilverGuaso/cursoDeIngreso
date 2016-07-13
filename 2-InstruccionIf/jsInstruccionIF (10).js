function Mostrar()
{
/*	//Genero el número RANDOM entre 1 y 10 
	var numero;
	numero=Math.floor(Math.random()*10+1);

	if (numero>=9) 
		{
			alert("Nota: "+numero+" Excelente!");
		} else if (numero>=4 && numero<=8)
		 {
		 	alert("Nota: "+numero+" Aprobó!");		
		 } else if (numero<=3)
		  {
		  	alert("Nota: "+numero+" Vamos, la próxima se puede!")
		  } 
*/
	var numero;
	numero=Math.floor(Math.random()*10+1);

	if (numero<9)
	 {
	 	if (numero>3)
	 	 {
	 	 	alert("Nota: "+numero+" Aprobó!");

	 	 }
	 	 else
	 	 {
	 	 	alert("Nota: "+numero+" Vamos, la proxima se puede!");
	 	 }
	 }
	 else
	 {
	 	alert("Nota: "+numero+" Excelente!");
	 }


}//FIN DE LA FUNCIÓN