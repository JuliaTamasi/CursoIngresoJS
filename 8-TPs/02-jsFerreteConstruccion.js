/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var totalAlambre;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    totalAlambre = (largo*2 + ancho*2) * 3; //el *3 es porque son 3 vueltas de alambre

    alert(`se necesitan ${totalAlambre} metros de alambre`);

}
function Circulo () 
{
	var radio;
    var totalAlambre;
    
    radio = txtIdRadio.value;
    radio = parseFloat(radio);

    totalAlambre = (2 * Math.PI * radio) * 3;

    alert(`se necesitan ${totalAlambre} metros de alambre`);
}
function Materiales () 
{
    var largo;
    var ancho;
    var areaTerrenoRectangular;
    var bolsasCemento;
    var bolsasCal;
    
    bolsasCemento = 2;
    bolsasCal = 3;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    areaTerrenoRectangular = largo*ancho;
    bolsasCemento = bolsasCemento * areaTerrenoRectangular;
    bolsasCal = bolsasCal * areaTerrenoRectangular;

    alert(`se necesitan ${bolsasCemento} bolsas de cemento y ${bolsasCal} bolsas de cal`);

}