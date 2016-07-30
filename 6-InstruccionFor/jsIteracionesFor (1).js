function Mostrar()
{
	var contador=0;
	var numero;
	var contador1=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var contador5=0;
	var contador6=0;
	var contador7=0;
	var contador8=0;
	var contador9=0;
	var contador10=0;
	var limite=100000;

	for (;contador<limite;)
	{
		
		//console.log(contador);
		contador++;
		
		 numero=Math.floor(Math.random()*10+1);
		 while (numero==5 && (contador5)>(limite*0.05)) 
		 {
		 	numero=Math.floor(Math.random()*10+1);
		 }



		 switch(numero)
		 {
		 	case 1:
		 	contador1++;
		 	break;
		 	case 2:
		 	contador2++;
		 	break;
		 	case 3:
		 	contador3++;
		 	break;
		 	case 4:
		 	contador4++;
		 	break;
		 	case 5:
		 	contador5++;
		 	break;
		 	case 6:
		 	contador6++;
		 	break;
		 	case 7:
		 	contador7++;
		 	break;
		 	case 8:
		 	contador8++;
		 	break;
		 	case 9:
		 	contador9++;
		 	break;
		 	case 10:
		 	contador10++;
		 	break;
		 }
		 
	}
	console.log("numero1: "+contador1*100/limite+"%");
	console.log("numero2: "+contador2*100/limite+"%");
	console.log("numero3: "+contador3*100/limite+"%");
	console.log("numero4: "+contador4*100/limite+"%");
	console.log("numero5: "+contador5*100/limite+"%");
	console.log("numero6: "+contador6*100/limite+"%");
	console.log("numero7: "+contador7*100/limite+"%");
	console.log("numero8: "+contador8*100/limite+"%");
	console.log("numero9: "+contador9*100/limite+"%");
	console.log("numero10: "+contador10*100/limite+"%");
	var suma= contador10+contador9+contador8+contador7+contador5+contador6+contador4+contador3+contador2+contador1;
	console.info("la suma es",suma ,contador3);

}