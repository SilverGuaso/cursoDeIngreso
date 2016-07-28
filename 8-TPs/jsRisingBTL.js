/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	var edad;
	var sexo;
	var estado;
	edad=0;
  estado=0;
	while(edad<18 || edad>90)
	{
		edad=prompt("ingrese edad válida");
    while(isNaN(edad))
    {
      edad=prompt("Su edad debe estar en numeros","23");
    }

	}
	document.getElementById('Edad').value=edad+" Años";
 	
 	 	
 	sexo=prompt("Ingrese su sexo","M o F");
 	while(sexo!="M" && sexo!="F")
 	{
 		alert("Reingrese su SEXO");
 		sexo=prompt("Ingrese su SEXO","M o F");
 	}
 	switch(sexo)
 	{
 		case "M":document.getElementById('Sexo').value="Masculino";
 		break;
 		default:document.getElementById('Sexo').value="Femenino";
 	}

 	
 	while(estado<1 || estado>4)
 	{
 		estado=prompt("Estado Civil. Ingrese: 1 Soltero. 2 Casado. 3 Divorciado. 4 Viudo","1, 2, 3, o 4");
    while(isNaN(estado))
    {
      estado=prompt("Estado Civil. Ingrese: 1 Soltero. 2 Casado. 3 Divorciado. 4 Viudo","1, 2, 3, o 4");
    }
 	}
 	switch(estado)
 	{
 		case "1":document.getElementById('EstadoCivil').value="Soltero";
 		break;
 		case "2":document.getElementById('EstadoCivil').value="Casado";
 		break;
 		case "3":document.getElementById('EstadoCivil').value="Divorciado";		
 		break;
 		default:document.getElementById('EstadoCivil').value="Viudo";
 		
  	}
  	var sueldo;
  	sueldo=0;
  	while(sueldo<=8000)
  	{
  		sueldo=prompt("Ingrese su sueldo bruto mayor a $8000");
      while(isNaN(sueldo))
      {
        sueldo=prompt("Ingrese su sueldo bruto en numeros");
      }
  	}
  	document.getElementById('Sueldo').value="$"+sueldo;
  	
  	var legajo;
  	legajo=0;
  	while(legajo<1000 || legajo>9999)
  	{
  		legajo=prompt("Ingrese Nº de legajo.");
      while(isNaN(legajo))
      {
        legajo=prompt("Ingrese Nº de legajo. En Números");
      }
  	}
  	document.getElementById('Legajo').value="Leg. Nº "+legajo;

  	var nacionalidad;
  	nacionalidad=prompt("Ingrese su nacionalidad","Ingrese A para Argentinos, E para Extranjeros, N para Nacionalizados");

  	while(nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N")
  	{
  		alert("Ingrese correctamente su Nacionalidad");
  		nacionalidad=prompt("Ingrese A para Argentinos, E para Extranjeros, N para Nacionalizados");

  	}
  	switch(nacionalidad)
  	{
  		case "A":document.getElementById('Nacionalidad').value="Argentino";
  		break;
  		case "E":document.getElementById('Nacionalidad').value="Extranjero";
  		break;
  		default:document.getElementById('Nacionalidad').value="Nacionalizado";
  	}

}
