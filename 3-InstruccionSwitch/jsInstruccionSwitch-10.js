function mostrar()
{
	var destinoIngresado;
	var estacionIngresada;
	destinoIngresado = txtIdDestino.value;
	estacionIngresada = txtIdEstacion.value;

	switch (estacionIngresada)
	{
		case "Invierno":
			switch (destinoIngresado)
			{
				case "Bariloche":
					alert ("Se viaja");
					break;
				default:
					alert ("No se viaja");
					break;
			}
		break;
		case "Verano":
			switch (destinoIngresado)
			{
				case "Mar del plata":
				case "Cataratas":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
					break;
			}
		break;
		case "Primavera":
			switch (destinoIngresado)
			{
				case "Bariloche":
					alert("No se viaja");
					break;
				default:
					alert("Se viaja");
					break;
			}
		break;
		default:
			alert("se viaja");
		break;
			
			
	}
	

}