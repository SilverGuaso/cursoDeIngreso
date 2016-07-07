function Mostrar()
{
/*
var edad;
edad=document.getElementById('edad').value;

if (edad>=13 && edad<=17)
 {} 

else 
{
	alert("Usted NO es adolescente.");
}
*/
var edad;
edad=document.getElementById('edad').value;
if (edad<18) 
{
	if (edad>12)
	 {}
	else
	{
		alert("Usted No es adolescente");
	}
}
else 
{
	alert("No es adolescente y es MAYOR");
}

}//FIN DE LA FUNCIÓN