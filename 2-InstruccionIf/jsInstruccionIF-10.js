function mostrar()
{
	var numeroRandom;
	numeroRandom = Math.floor(Math.random() * 10) + 1;

	if (numeroRandom > 8) 
	{
		alert ("EXCELENTE.");
	} 
	else
	{ 
		if (numeroRandom > 3) 
	    {
		alert ("APROBÓ.");
		} 
		else 
	    {
		alert ("Vamos, la proxima se puede.");
	    }
    }
	
	
}