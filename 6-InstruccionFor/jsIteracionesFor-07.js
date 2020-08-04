function mostrar()
{
	var acumulador;
	var numero;
	numero = prompt("Ingrese un numero");
	numero = parseInt(numero);
	acumulador = 0;

	for (var i=0; i<=numero; i++)
	{
		if(numero%i==0)
		{
			acumulador++;
			document.write(i+"<br>");
		}
	}
	
	document.write("La cantidad de divisores es " + acumulador);


	


}