/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;

numeroIngresado = txtIdNumero.value;
numeroIngresado = parseFloat (numeroIngresado);
contadorIntentos = 0;

function comenzar()
{

  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  
  
}

function verificar()
{
  if (numeroIngresado == numeroSecreto)
  {
    alert (`Usted es un ganador!!! y en solo ${contadorIntentos} intentos`)
  }
  else if (numeroIngresado > numeroSecreto)
  {
    alert ("se pasó...");
  }
  else
  {
    alert ("falta...");
  }

  if (numeroIngresado != numeroSecreto)
  {
    contadorIntentos = contadorIntentos + 1;
    txtIdIntentos.value = contadorIntentos;
  }	 
  
}