/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var resultadoSuma;
	var numeroUno;
	var numeroDos;
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	resultadoSuma = (numeroUno + numeroDos);


	alert(`la suma es ${resultadoSuma}`);	
}

function restar()
{
	var resultadoResta;
	var numeroUno;
	var numeroDos;
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	resultadoResta = (numeroUno - numeroDos);


	alert(`la resta es ${resultadoResta}`);	
}

function multiplicar()
{ 
	var resultadoMultiplicacion;
	var numeroUno;
	var numeroDos;
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	resultadoMultiplicacion = (numeroUno * numeroDos);


	alert(`el resultado de la multiplicacion es ${resultadoMultiplicacion}`);	
}

function dividir()
{
	var resultadoDivision;
	var numeroUno;
	var numeroDos;
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	resultadoDivision = (numeroUno / numeroDos);


	alert(`el resultado de la division es ${resultadoDivision}`);	
}

