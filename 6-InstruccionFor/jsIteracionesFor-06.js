function mostrar()
{
	var acumulador;
	var numero;
	numero = prompt("Ingrese un numero");
	numero = parseInt(numero);
	acumulador = 0;

	for (var i=2; i<numero; i++)
	{
		if(i%2==0)
		{
			acumulador++;
			document.write(i+"<br>");
		}
	}
	
	document.write("La cantidad de numeros pares es " + acumulador);


}