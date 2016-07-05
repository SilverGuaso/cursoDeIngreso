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
 	var cantidad;
 	var marca;
 	cantidad=document.getElementById('Cantidad').value;
 	marca=document.getElementById('Marca').value;

 	if (cantidad>=6)
 	 {
 	 	var resultado;
 	 	resultado=(parseInt(cantidad)*35)*0.50;
 	 	document.getElementById('precioDescuento').value=resultado;
 	 	if (resultado>=121) 
 	 		{
 	 			alert("Usted pagó $"+resultado*0.1+" de IIBB. "+" El total asciende a $"+resultado*1.1);

 	 		}
 	 } 
 	 else if (cantidad==5 & marca=='ArgentinaLuz')
 	  {
 	  	var resultado;
 	  	resultado=(parseInt(cantidad)*35)*0.6;
 	  	document.getElementById('precioDescuento').value=resultado;

 	  }
 	  else if (cantidad==5 & marca!='ArgentinaLuz')

 	  	 {
 	  	 	var resultado;
 	  	 	resultado=(parseInt(cantidad)*35)*0.7;
 	  	 	document.getElementById('precioDescuento').value=resultado;
 	  	 } 
 	  	 else if (cantidad==4 & marca=='ArgentinaLuz')
 	  	  {
 	  	  	var resultado;
 	  	  	resultado=(parseInt(cantidad)*35)*0.75;
 	  	  	document.getElementById('precioDescuento').value=resultado;
 	  	  	
 	  	  } 
 	  	   else if (cantidad==4 & marca=='FelipeLamparas')
 	  	  	 {
 	  	  	 	var resultado;
 	  	  	 	resultado=(parseInt(cantidad)*35)*0.75;
 	  	  	 	document.getElementById('precioDescuento').value=resultado;
 	  	  	 }
 	  	  	 else if (cantidad==4) 
 	  	  	 { 
 	  	  	 	var resultado;
 	  	  	 	resultado=(parseInt(cantidad)*35)*0.80;
 	  	  	 	document.getElementById('precioDescuento').value=resultado;

 	  	  	 }
 	  	  	 else if (cantidad==3 & marca=='ArgentinaLuz')
 	  	  	  {
 	  	  	  	var resultado;
 	  	  	 	resultado=(parseInt(cantidad)*35)*0.85;
 	  	  	 	document.getElementById('precioDescuento').value=resultado;
 	  	  	  } 
 	  	  	  else if (cantidad==3 & marca=='FelipeLamparas')
 	  	  	   {
 	  	  	   	var resultado;
 	  	  	 	resultado=(parseInt(cantidad)*35)*0.90;
 	  	  	 	document.getElementById('precioDescuento').value=resultado;
 	  	  	   } 
 	  	  	   else if (cantidad==3)
 	  	  	    {
 	  	  	    	var resultado;
 	  	  	    	resultado=(parseInt(cantidad)*35)*0.95;
 	  	  	    	document.getElementById('precioDescuento').value=resultado;
 	  	  	    } 
 	  	  	    else if (cantidad==2) 
 	  	  	    	{
 	  	  	    	var resultado;
 	  	  	    	resultado=parseInt(cantidad)*35;
 	  	  	    	document.getElementById('precioDescuento').value=resultado; 	  	  	    		

 	  	  	    	} 
 	  	  	    	else if (cantidad==1)
 	  	  	    	 {
 	  	  	    	 	var resultado;
 	  	  	    	 	resultado=parseInt(cantidad)*35;
 	  	  	    	 	document.getElementById('precioDescuento').value=resultado;
 	  	  	    	 } else if (cantidad==0)
 	  	  	    	  {
 	  	  	    	  	alert("Ingrese una cantidad válida de lámparas")
 	  	  	    	  } 


 	   
}