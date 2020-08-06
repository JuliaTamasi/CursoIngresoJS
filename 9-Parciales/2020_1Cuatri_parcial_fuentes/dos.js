/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/

function mostrar()
{
  //declaracion de variables

  var tipoBolsa;
  var cantidadBolsas;
  var precioBolsa;
  var respuesta;
  var descuento;


  var importeBruto;
  var importeDescuento;
  var bolsasArena;
  var bolsasCal;
  var bolsasCemento;
  var precioArena;
  var precioCal;
  var precioCemento;
  var precioBolsaTotal;
  var cantidadBolsasTotal;
  var maximaCantidadBolsas;
  var tipoMasCaro;
  

  //inicializacion de contadores

  respuesta = true;
  descuento = 0;
  importeBruto = 0;
  precioArena = 0;
  precioCal = 0;
  precioCemento = 0;
  precioBolsaTotal = 0;
  bolsasCemento = 0;
  bolsasCal = 0;
  bolsasArena = 0;
  
  
  while (respuesta == true)
  {
    //validacion de datos
    
    tipoBolsa = prompt("Ingrese el tipo de producto que desea adquirir");
    
    while (tipoBolsa != "arena" && tipoBolsa != "cemento" && tipoBolsa != "cal")
    {
      tipoBolsa = prompt("ERROR. Reingrese el tipo de producto (arena, cemento o cal)");
    }

    cantidadBolsas = prompt("Ingrese la cantidad de bolsas que desea");
    cantidadBolsas = parseInt(cantidadBolsas);

    while(cantidadBolsas<1 || isNaN(cantidadBolsas) == true)
    {
      cantidadBolsas = prompt("ERROR. Reingrese la cantidad de bolsas que desea");
      cantidadBolsas = parseInt(cantidadBolsas);
    }

    precioBolsa = prompt("Ingrese el precio por bolsa");
    precioBolsa = parseInt(precioBolsa);
    
    while(precioBolsa<0)
    {
      precioBolsa = prompt("ERROR. Reingrese el precio por bolsa");
      precioBolsa = parseInt(precioBolsa);
    }

    
    //separo por tipo
    
    switch (tipoBolsa)
    {
      case "cemento" :
        bolsasCemento += cantidadBolsas;
        precioCemento += precioBolsa*cantidadBolsas;
        break;
      case "arena" : 
        bolsasArena += cantidadBolsas;
        precioArena += precioBolsa*cantidadBolsas;
        break;
      case "cal" :
        bolsasCal += cantidadBolsas;
        precioCal += precioBolsa*cantidadBolsas;
        break;
    }
    
    respuesta = confirm("¿Desea ingresar otra compra?");   

  }

  //calculo el tipo con mas bolsas

  if(bolsasCemento > bolsasArena && bolsasCemento > bolsasCal)
    {
      maximaCantidadBolsas = "cemento";
    }
    else
    {
      if (bolsasArena > bolsasCemento && bolsasArena > bolsasCal)
      {
        maximaCantidadBolsas = "arena";
      }
      else
      {
        maximaCantidadBolsas = "cal";
      }
    }

  //calculo el tipo mas caro

  if(precioArena > precioCal && precioArena > precioCemento)
  {
    tipoMasCaro = "arena";
  }
  else
  {
    if(precioCal > precioCemento && precioCal > precioArena)
    {
      tipoMasCaro = "cal";
    }
    else
    {
      tipoMasCaro = "cemento";
    }
  }

  //calculo los totales

  cantidadBolsasTotal = bolsasArena + bolsasCal + bolsasCemento;
  precioBolsaTotal = precioArena + precioCal + precioCemento;
  
  //seteo el descuento
  
  if(cantidadBolsasTotal > 29)
  {
    descuento = precioBolsaTotal*0.25;
  }
  else
  {
    if (cantidadBolsasTotal > 9)
    {
      descuento = precioBolsaTotal*0.15;
    }
  }
  
  //calculo el importe total

  importeBruto = precioBolsaTotal;
  importeDescuento =  precioBolsaTotal - descuento;

  //muestro por consola

  console.log(`el importe bruto es de ${importeBruto}`);
  console.log(`el importe con descuento es de ${importeDescuento}`);
  console.log(`el tipo mas caro es ${tipoMasCaro}`);
  console.log(`el tipo con mas bolsas es ${maximaCantidadBolsas}`);

}




  









