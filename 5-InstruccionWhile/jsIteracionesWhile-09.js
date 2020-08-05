/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	// declarar variables
	var numeroIngresado;
	var maximo;
	var minimo;
	var respuesta;
	var primeraVez = true;
	
	//iniciar variables
	
	respuesta = true;

	
	
	do
	{
		do
		{
			numeroIngresado = prompt("Ingrese un numero");
			numeroIngresado = parseInt (numeroIngresado);
		} 
		while(isNaN(numeroIngresado)== true);

		if(primeraVez)
		{
			primeraVez = false;
			maximo = numeroIngresado;
			minimo = numeroIngresado;
		}
		else
		{
			if(numeroIngresado>maximo)
			{
				maximo = numeroIngresado;
			}
			else
			{
				if(numeroIngresado<minimo)
				{
					minimo = numeroIngresado;
				}
			}
		
		}

		respuesta = confirm("desea continuar?");
	}
	
	while(respuesta == true);

	txtIdMaximo.value = maximo;
	txtIdMinimmo.value = minimo;
}