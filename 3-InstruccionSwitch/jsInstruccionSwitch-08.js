function mostrar()
{
	var destinoIngresado;
	destinoIngresado = txtIdDestino.value;

	switch (destinoIngresado)
	{
		case "Bariloche":
		case "Cordoba":
			alert ("hace frio");
			break;
		default:
			alert ("Hace calor");
	}

}