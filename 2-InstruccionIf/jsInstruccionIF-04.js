function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad > 12 && edad < 18){
		
		alert('Usted es adolescente');
	}
}