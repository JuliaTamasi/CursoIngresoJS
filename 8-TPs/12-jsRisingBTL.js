/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edadIngresada;
 	var sexoIngresado;
	var estadoCivilIngresado;
	var sueldoBruto;
	var legajoIngresado;
	var nacionalidadIngresada;
	
	edadIngresada = prompt("Ingrese su edad");
	edadIngresada = parseInt (edadIngresada);
	
	while(edadIngresada < 18 || edadIngresada > 90 || isNaN (edadIngresada) == true)
	{
		edadIngresada = prompt("ERROR. Ingrese nuevamente su edad (18-90)");
		edadIngresada = parseInt(edadIngresada);
	}
	
	txtIdEdad.value = "Su edad es " + edadIngresada;
	
	// fin de validacion edad


	sexoIngresado = prompt("Ingrese su sexo (f/m)");
	sexoIngresado = sexoIngresado.toLowerCase();

	while (sexoIngresado != 'm' && sexoIngresado != 'f')
	{
		sexoIngresado = prompt("ERROR. Reingrese su sexo (f/m)");
	}
	

	switch (sexoIngresado)
	{
		case 'f':
			sexoIngresado = "femenino";
		break;
		case 'm':
			sexoIngresado = "masculino";
		break;
	}

	txtIdSexo.value = "Su sexo es " + sexoIngresado;
	
	//fin de validacion sexo


	estadoCivilIngresado = prompt ("Ingrese su estado civil");
	estadoCivilIngresado = parseInt (estadoCivilIngresado);

	while (estadoCivilIngresado < 1 || estadoCivilIngresado > 4 || isNaN (estadoCivilIngresado) == true)
	{
		estadoCivilIngresado = prompt ("ERROR. Reingrese su estado civil (1,2,3,4)");
		estadoCivilIngresado = parseInt (estadoCivilIngresado);
	}

	switch (estadoCivilIngresado)
	{
		case 1: 
			estadoCivilIngresado = "soltero";
			break;
		case 2: 
			estadoCivilIngresado = "casado";
			break;
		case 3:
			estadoCivilIngresado = "divorciado";
			break;
		case 4: 
			estadoCivilIngresado = "viudo";
			break;
	}

	txtIdEstadoCivil.value = "Su estado civil es " + estadoCivilIngresado;
	
	//fin de validacion estado civil


	sueldoBruto = prompt("Ingrese su sueldo bruto");
	sueldoBruto = parseInt(sueldoBruto);

	while (sueldoBruto < 8000 || isNaN (sueldoBruto) == true)
	{
		sueldoBruto = prompt("ERROR. Reingrese su sueldo bruto");
		sueldoBruto = parseInt(sueldoBruto);
	}

	txtIdSueldo.value = "Su sueldo es de " + sueldoBruto;

	//fin de validacion sueldo bruto


	legajoIngresado = prompt ("Ingrese su numero de legajo");
	legajoIngresado = parseInt (legajoIngresado);

	while (legajoIngresado < 1000 || legajoIngresado > 9999 || isNaN (legajoIngresado) == true)
	{
		legajoIngresado = prompt ("ERROR. Reingrese su numero de legajo sin 0 a la izquierda");
		legajoIngresado = parseInt (legajoIngresado);
	}

	txtIdLegajo.value = "Su numero de legajo es " + legajoIngresado;

	//fin validacion legajo


	nacionalidadIngresada = prompt("Ingrese su nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
	nacionalidadIngresada = nacionalidadIngresada.toUpperCase();

	while (nacionalidadIngresada != "A" && nacionalidadIngresada != "E" && nacionalidadIngresada != "N")
	{
		nacionalidadIngresada = prompt("ERROR. Reingrese su nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
	} 

	switch (nacionalidadIngresada)
	{
		case "A":
			nacionalidadIngresada = "argentino";
			break;
		case "E":
			nacionalidadIngresada = "extranjero";
			break;
		case "N":
			nacionalidadIngresada = "nacionalizado argentino";
			break;

	}
	 
	txtIdNacionalidad.value =  "Su nacionalidad es " + "'" + nacionalidadIngresada + "'";

}
