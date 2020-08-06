function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;
	var respuesta;
	var personaMasTemperatura;
	var acumuladorTemperatura;
	var acumuladorViudos;
	var acumuladorHombresSolteros_Viudos;
	var edadHombresSolteros;
	var promedioHombresSolteros;
	var hombresSolteros;
	var terceraEdadAltaTemperatura;


	// punto A
	acumuladorTemperatura = 0;
	
	//punto B
	acumuladorViudos = 0;

	//punto C
	acumuladorHombresSolteros_Viudos = 0;

	//punto D
	terceraEdadAltaTemperatura = 0;
	
	//punto E
	edadHombresSolteros = 0;
	hombresSolteros = 0;


	respuesta = true;

	while (respuesta == true)
	{
		//entrada y validacion de datos

		nombre = prompt("Ingrese su nombre");
		
		edad = prompt("Ingrese su edad");
		edad = parseInt(edad);
		while(isNaN(edad)==true)
		{
			edad = prompt("ERROR. Reingrese su edad");
			edad = parseInt(edad);
		}

		sexo = prompt("Ingrese su sexo (f/m)");
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("ERROR. Reingrese su sexo (f/m)");
		}

		estadoCivil = prompt("Ingrese su estado civil");
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("ERROR.Reingrese un estado civil valido (soltero, casado, viudo)");
		}

		temperaturaCorporal = prompt("Ingrese su temperatura corporal");
		temperaturaCorporal = parseInt(temperaturaCorporal);
		while(isNaN(temperaturaCorporal)==true)
		{
			temperaturaCorporal = prompt("ERROR.Reingrese su temperatura corporal");
			temperaturaCorporal = parseInt(temperaturaCorporal);
		}

		//punto A - Persona con mas temperatura
		if(temperaturaCorporal>acumuladorTemperatura)
		{
			acumuladorTemperatura = temperaturaCorporal;
			personaMasTemperatura = nombre;
		}

		//casos de estado civil
		switch (estadoCivil)
		{
			case "viudo" :
				if (edad>17)
				{
					acumuladorViudos++;
				}
				if (sexo == "m")
				{
					acumuladorHombresSolteros_Viudos++;
				}
				break;
			case "soltero":
				if (sexo == "m")
				{
					acumuladorHombresSolteros_Viudos++;
					hombresSolteros++;
					edadHombresSolteros += edad;
				}
				break;
		}

		//Punto D - Personas de la 3ra edad con alta temperatura

		if(edad>59 && temperaturaCorporal>37.9)
		{
			terceraEdadAltaTemperatura++;
		}

		respuesta = confirm ("Desea cargar otro pasajero?")
	}

	//calculo el promedio. Punto E
	
	promedioHombresSolteros = edadHombresSolteros/hombresSolteros;

	//muestro por consola
	
	console.log("La persona con mas temperatura es " + personaMasTemperatura);
	console.log("Hay " + acumuladorViudos + " mayores de edad que estan viudos");
	console.log("Hay " + acumuladorHombresSolteros_Viudos + " hombres que estan solteros o viudos");
	console.log("Hay " + terceraEdadAltaTemperatura + " personas de la tercera edad que tienen mas de 38 de temperatura" );
	console.log("El promedio de edad entre los hombres solteros es de " + promedioHombresSolteros);

}
