function mostrar()
{
	var acumuladorDivisores;
	var numero;
	acumuladorDivisores = 0;


	do
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
	} 
	while (isNaN(numero)==true);
	
	
	for(var i=0; i<=numero; i++)		
	{
		if (numero%i==0)
		{
			acumuladorDivisores++;
		}
		
	}
	
	if(acumuladorDivisores==2)
	{
		console.log("este es un numero primo");
	}
	

}