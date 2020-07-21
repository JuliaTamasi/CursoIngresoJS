function mostrar(){

	var edad;
	var condicion;
		
	condicion = estadoCivil.value;
	edad = txtIdEdad.value;
	edad = parseInt(edad);
		
		
	if (edad > 17 && condicion == "Soltero") {
			
		alert("Es soltero y no es menor");

	}
}