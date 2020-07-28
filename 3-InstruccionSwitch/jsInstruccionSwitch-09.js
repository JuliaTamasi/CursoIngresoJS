function mostrar()
{
	var destinoIngresado;
	var estacionIngresada;
	var precio;
	var descuento;
	precio = 15000
	estacionIngresada = txtIdEstacion.value;
	destinoIngresado = txtIdDestino.value;


	switch (estacionIngresada)
	{
		case "Invierno":
			switch (destinoIngresado)
			{
				case "Bariloche":
					descuento = precio*0.20;
					precio = precio + descuento;
					alert(`el precio final es de ${precio}`);
					break;
				case "Mar del plata":
					descuento = precio*0.20;
					precio = precio - descuento;
					alert (`el precio final es de ${precio}`);
					break;
				default:
					descuento = precio*0.10;
					precio = precio - descuento;
					alert (`el precio final es de ${precio}`);
					break;				
			}
		    break;
		case "Verano":
			switch (destinoIngresado)
			{
				case "Bariloche":
					descuento = precio*0.20;
					precio = precio - descuento;
					alert (`el precio final es de ${precio}`);
					break;
				case "Mar del plata":
					descuento = precio*0.20;
					precio = precio + descuento;
					alert (`el precio final es de ${precio}`);
					break;
				default:
					descuento = precio*0.10;
					precio = precio + descuento;
					alert (`el precio final es de ${precio}`);
					break;
			}
			break;
		default:
			switch (destinoIngresado)
			{
				case "Cordoba":
					alert (`el precio final es de ${precio}`);
					break;
				default:
					descuento = precio*0.10;
					precio = precio + descuento;
					alert (`el precio final es de ${precio}`);
			}
			break;
	}




}