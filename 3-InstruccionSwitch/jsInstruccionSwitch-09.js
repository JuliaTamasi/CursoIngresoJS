/*
function mostrar()
{
	var destinoIngresado;
	var estacionIngresada;
	var precio;
	var impuesto;
	precio = 15000
	estacionIngresada = txtIdEstacion.value;
	destinoIngresado = txtIdDestino.value;


	switch (estacionIngresada)
	{
		case "Invierno":
			switch (destinoIngresado)
			{
				case "Bariloche":
					impuesto = precio*0.20;
					precio = precio + impuesto;
					alert(`el precio final es de ${precio}`);
					break;
				case "Mar del plata":
					impuesto = precio*0.20;
					precio = precio - impuesto;
					alert (`el precio final es de ${precio}`);
					break;
				default:
					impuesto = precio*0.10;
					precio = precio - impuesto;
					alert (`el precio final es de ${precio}`);
					break;				
			}
		break;
		case "Verano":
			switch (destinoIngresado)
			{
				case "Bariloche":
					impuesto = precio*0.20;
					precio = precio - impuesto;
					alert (`el precio final es de ${precio}`);
				break;
				case "Mar del plata":
					impuesto = precio*0.20;
					precio = precio + impuesto;
					alert (`el precio final es de ${precio}`);
				break;
				default:
					impuesto = precio*0.10;
					precio = precio + impuesto;
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
					impuesto = precio*0.10;
					precio = precio + impuesto;
					alert (`el precio final es de ${precio}`);
				break;
			}
		break;
	}

}
*/

function mostrar()
{
	var destinoIngresado;
	var estacionIngresada;
	var precio;
	var impuesto;
	precio = 15000;
	estacionIngresada = txtIdEstacion.value;
	destinoIngresado = txtIdDestino.value;


	switch (estacionIngresada)
	{
		case "Invierno":
			switch (destinoIngresado)
			{
				case "Bariloche":
					impuesto = 1.20;					
				break;
				
				case "Mar del plata":
					impuesto = 0.8;										
				break;
				
				default:
					impuesto = 0.9;										
				break;				
			}
		break;
		case "Verano":
			switch (destinoIngresado)
			{
				case "Bariloche":
					impuesto = 0.8;										
				break;
				
				case "Mar del plata":
					impuesto = 1.20;					
				break;
				
				default:
					impuesto = 1.10;										
				break;
			}
		break;
		default:
			switch (destinoIngresado)
			{
				case "Cordoba":
					impuesto = 1; //porque se mantiene el precio, entonces se multiplica por 1.
				break;
				default:
					impuesto = 1.10;
				break;
			}
		break;
	}
	
	precio = precio*impuesto;
	alert ("el precio final es de " + precio);

}



