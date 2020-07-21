function mostrar()
{
	var numeroRandom;
	numeroRandom = Math.floor(Math.random() * 10) + 1;

	if (numeroRandom > 8){
		alert (`Su nota es un ${numeroRandom}. EXCELENTE`);
	} else if (numeroRandom > 3){
		alert (`Su nota es un ${numeroRandom}. APROBO`);
	} else {
		alert (`Su nota es un ${numeroRandom}. Vamos, la proxima se puede`);
	}
	
}