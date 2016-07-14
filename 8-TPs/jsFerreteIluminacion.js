/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	

/*
	var cantidad;
	var marca;
	var precioBruto;
	var descuento;
	var precioNeto;
	cantidad=document.getElementById('Cantidad').value;
	marca=document.getElementById('Marca').value;
	precioBruto=35*cantidad;

	switch(marca) 
	{	//abre ArgentinaLuz
		case "ArgentinaLuz":
		if (cantidad==3)
		 {
	 		descuento=0.85;
	 	}
	 	else
	 	{
	 		if (cantidad==4)
	 		 {
	 		 	descuento=0.75;
	 		 }
	 		 else 

	 	 	{
	 	 		if (cantidad==5)
	 	 		{
	 	 			descuento=0.60;
	 			}
	 			else
	 			{
	 				if (cantidad>5)
	 			 	{
	 			 		descuento=0.50;
	 			 	}
	 			 	else
	 			 	{
	 			 		descuento=1;
	 			 	}
	 			}	
	 	 	}
	 	}
	 	
		break;//cierra marca ArgentinaLuz
		//abre FelipeLamparas
		case "FelipeLamparas":
		if (cantidad==3)
		 {
	 		descuento=0.9;
	 	}
	 	else
	 	{
	 		if (cantidad==4)
	 	 	{
	 	 		descuento=0.75;
	 	 	}
	 	 	else
	 	 	{
	 	 		if (cantidad==5)
	 	 		{
	 	 		 	descuento=0.70;
	 	 		 }
	 	 		 else
	 	 		 {
	 	 		 	if (cantidad>5)
	 			 	 {
	 	 	 	 		descuento=0.50;
	 	 	 	 	}
	 	 	 	 	else
	 	 	 	 	{
	 	 	 	 		descuento=1;
	 	 	 	 	}
	 	 	 	}
	 	 	}
	 	}

	 	break;//cierra marca FelipeLamparas
	 	//abre las demas marcas
	 	default:
	 	if (cantidad<6)
	  	{
	  		switch(cantidad)
	  		{ 
	  			case "5":
	  			descuento=0.70;
	  			break;
	  			case "4":
	  			descuento=0.80;
	  			break;
	  			case "3":
	  			descuento=0.95;
	  			break;
	  			default:
	  			descuento=1;

	  		}
	  
	  	}
	  	else
	  	{
	  		descuento=0.50;
	  	}
	  	//aca se cierra el default (que son las demas marcas) por que no lleva break
	}//cierra el switch (marca)
		

	precioNeto=precioBruto*descuento;
	 	
	 if (precioNeto>120)
	 {
	 	 alert("Usted pagó: $"+precioNeto*0.10+" de IIBB");
	 	 document.getElementById('precioDescuento').value="$"+precioNeto*1.10;//Sumandole IIBB
	 }
	  else
	 {
	 	 document.getElementById('precioDescuento').value="$"+precioNeto;//Sin sumar IIBB
	 }
*/

/*
	var cantidad;
	var marca;
	var precioNeto;
	var descuento;
	var precioFinal;
	var iibb;//para calcular cuanto es de IIBB
	var masiibb;//para sumarle IIBB al total
	cantidad=document.getElementById('Cantidad').value;
	marca=document.getElementById('Marca').value;
	precioNeto=35*cantidad;
	iibb=0.10;
	masiibb=1.10;

	switch (cantidad)
	{
		case "5":
		if (marca=="ArgentinaLuz")
		 {
		 	descuento=0.60;
		 }
		 else
		 {
		 	descuento=0.70;
		 }
		break;
		case "4":
		 if (marca=="ArgentinaLuz")
		  {
		  	descuento=0.75;
		  }
		  else
		  {
		  	if (marca=="FelipeLamparas")
		  	{
		  		descuento=0.75;
		  	}
		  	else
		  	{
		  		descuento=0.80;
		  	}
		  }
		break;
		case "3":
		  if (marca=="ArgentinaLuz")
		   {
		   	descuento=0.85;
		   }
		   else
		   {
		   	if (marca=="FelipeLamparas")
		   	 {
		   	 	descuento=0.90;
		   	 }
		   	 else
		   	 {
		   	 	descuento=0.95;
		   	 }
		   }
		break;
		case "2":
		case "1":
		   descuento=1
		break;
		case "0":
		case "":
		   alert("Ingrese una cantidad válida");
		   descuento=0
		break;
		default:
		   descuento=0.50
	}

	precioFinal=descuento*precioNeto;
	if (precioFinal>120)
	 {
	 	alert("Usted pagó $"+precioFinal*iibb+" de IIBB");
	 	document.getElementById('precioDescuento').value="$"+precioFinal*masiibb;
	 }
	 else
	 {
	 	document.getElementById('precioDescuento').value="$"+precioFinal;
	 }
*/
}
