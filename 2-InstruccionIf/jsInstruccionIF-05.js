/*function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad < 13 || edad > 17){

		alert ('Usted no es un adolescente');
	}

}
*/

/*function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad > 17) {
		
		alert ('Usted no es un adolescente');

	} else if (edad < 13) {
		
		alert ('Usted no es un adolescente');
	}
	

}
*/

function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (!(edad > 12 && edad < 18)){
		
		alert('Usted no es adolescente');
	}
}










