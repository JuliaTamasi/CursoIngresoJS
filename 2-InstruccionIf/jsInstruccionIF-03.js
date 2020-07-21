function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad > 17){
		alert ('Usted es mayor de edad');
	}else {
		alert ('Usted es menor de edad');
	}
	

}