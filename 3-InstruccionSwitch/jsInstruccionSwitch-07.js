function mostrar()
{
	var destinoIngresado;
	destinoIngresado = txtIdDestino.value;
	
	switch (destinoIngresado)
	{
		case "Bariloche":
			alert ("Se encuentra al oeste");
			break;
		case "Cataratas":
			alert ("Se encuentra al norte");
			break;
		case "Mar del plata":
			alert ("Se encuentra al este");
			break;
		case "Cordoba":
			alert("Se encuentra al sur");
			break;
	}
}