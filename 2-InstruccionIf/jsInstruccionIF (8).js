function Mostrar()
{
	var edad;
	var estado;
	edad=document.getElementById('edad').value;
	estado=document.getElementById('estadoCivil').value;

	if (edad<=18) 
		{

		} 
		else if (edad>=18 & estado=='Soltero')
		 {
		 	alert("Usted es mayor y es soltero");

		 } else if (edad>=18 & estado=='Casado')
		  {
		  	alert("Usted es mayor y es casado");

		  } else if (edad>=18 & estado=='Divorciado')
		   {
		   	alert("Usted es mayor y es divorciado");

		   }
	


}//FIN DE LA FUNCIÓN