/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado;
    
    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;
    
    precioUno = parseFloat (precioUno);
    precioDos = parseFloat (precioDos);
    precioTres = parseFloat (precioTres);
    
    resultado = precioUno + precioDos + precioTres;
    
    alert(`la suma de los tres precios es ${resultado}`);
	
}
function Promedio () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado;
    
    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;
    
    precioUno = parseFloat (precioUno);
    precioDos = parseFloat (precioDos);
    precioTres = parseFloat (precioTres);
    
    resultado = (precioUno + precioDos + precioTres) / 3; //divide por 3, porque es el promedio

	alert(`el promedio de los 3 precios es ${resultado}`);
}
function PrecioFinal () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var total;
    
    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;
    
    precioUno = parseFloat (precioUno);
    precioDos = parseFloat (precioDos);
    precioTres = parseFloat (precioTres);

    total = (precioUno + precioDos + precioTres) * 1.21; //*1.21 es el IVA

    alert(`el precio final es de ${total}`);    
    
}