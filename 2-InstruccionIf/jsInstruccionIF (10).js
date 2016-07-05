function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var azar;
	azar=Math.floor(Math.random()*10+1);

	if (azar>=9) 
		{
			alert("Nota: "+azar+" Excelente!");
		} else if (azar>=4 && azar<=8)
		 {
		 	alert("Nota: "+azar+" Aprobó!");		
		 } else if (azar<=3)
		  {
		  	alert("Nota: "+azar+" Vamos, la próxima se puede!")
		  } 

}//FIN DE LA FUNCIÓN