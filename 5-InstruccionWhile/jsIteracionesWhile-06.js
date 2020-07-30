function mostrar()
{
	var i;
	var acumulador;
	var numeroIngresado;
	var promedio;

	i=0;
	acumulador=0;

	while(i<5)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;

		i++;
	}
	
	promedio = acumulador/i;
	
	txtIdSuma.value = acumulador;
	txtIdPromedio.value = promedio;
}