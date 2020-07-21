
function mostrar()
{
	var edad;
	var miEstadoCivil; 

	edad = txtIdEdad.value;
	edad = parseInt(edad);
	miEstadoCivil = estadoCivil.value;


	if (edad < 18 && miEstadoCivil != "Soltero") {

		alert("Usted es muy pequeño para NO ser soltero.");
	}
}
