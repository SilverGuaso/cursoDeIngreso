function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	while(contador<10)
	{
		contador++;
		numero=prompt("ingrese");
		acumulador=acumulador+parseInt(numero);

	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;
//hacer ferrete iluminacion. ejercicio 12. ejercicio 5. ejrecico 7. ejercicio 9. ejercicio 11.7.8.10.13
}//FIN DE LA FUNCIÓN