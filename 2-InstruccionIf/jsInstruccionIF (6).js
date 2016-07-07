function Mostrar()
{
/*
var edad;
edad=document.getElementById('edad').value;

if (edad>=18)
 { alert("Usted es mayor.");

} 
else if (edad>=13 & edad<=17) 
	{
		alert("Usted es adolescente");

	} 
	else if (edad<=12) 
		{
			alert("Usted es menor.");

		} 

*/
var edad;
edad=document.getElementById('edad').value;
if (edad<18)
 {
 	if (edad>12)
 	 {
 	 	alert("Usted es Adolescente.");

 	 }
 	 else 
 	 {
 	 	alert("Usted es Menor.");
	 }
 }
 else
 	{
 		alert("Usted es Mayor.");
 	}


}//FIN DE LA FUNCIÓN