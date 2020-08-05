
function mostrar()
{
	//declaracion de variables
	var producto;
	var precio;
	var cantidadProductos;
	var marca;
	var fabricante;
	var precioAlcoholBarato;
	var contadorAlcoholBarato;
	var fabricanteAlcoholBarato;
	var contadorAlcoholes;
	var cantidadJabones;
	var contadorBarbijos;
	var precioAlcohol;
	var precioBarbijos;
	var precioJabones;
	var promedio;
	
	
	
	
	//asignacion de contadores
	contadorBarbijos = 0;
	contadorAlcoholes = 0;
	cantidadJabones = 0;
	precioBarbijos = 0;
	precioAlcoholBarato = 0;
	precioJabones = 0;

	//inicio del ciclo

	for(i=0; i<5; i++)
	{
		//validacion producto
		producto = prompt("Ingrese el tipo de producto que desea (barbijo, jabon o alcohol)");
		
		while (producto != "barbijo" && producto != "jabon" && producto != "alcohol")
		{
			producto = prompt("Error, ingrese un articulo valido (jabon, barbijo o alcohol)");
		}

		//validacion precio
		precio = prompt("Ingrese el precio del producto");
		precio = parseInt(precio);
		
		while (precio < 100 || precio > 300 || isNaN(precio) == true)
		{
			precio = prompt("ERROR. Reingrese el precio del producto (100-300)");
			precio = parseInt(precio);
		}
		
		//validacion cantidad de productos
		cantidadProductos = prompt("Ingrese la cantidad de productos");
		cantidadProductos = parseInt(cantidadProductos);
		
		while(cantidadProductos < 1 || cantidadProductos > 1000 || isNaN(cantidadProductos) == true)
		{
			cantidadProductos = prompt("ERROR. Reingrese la cantidad de productos (1-1000)");
			cantidadProductos = parseInt(cantidadProductos);
		}
		
		// validacion marca y fabricante
		marca = prompt("Ingrese la marca del producto");
		fabricante = prompt("Ingrese el fabricante del producto");

		
		//discriminacion por producto

		switch(producto)
		{
			case "alcohol":
				
				contadorAlcoholes += cantidadProductos;
				precioAlcohol += precio*cantidadProductos;

				if(precio < precioAlcoholBarato || precioAlcoholBarato==0)
				{
					precioAlcoholBarato = precio;
					contadorAlcoholBarato = cantidadProductos;
					fabricanteAlcoholBarato = fabricante;
				}
			break;
				
			case "jabon" :
				cantidadJabones += cantidadProductos;
				precioJabones += precio*cantidadProductos;
			break;
			case "barbijo":
				contadorBarbijos += cantidadProductos;
				precioBarbijos += precio*cantidadProductos;
			break;
		}	

	}

	//calculo del promedio fuera del ciclo
	
	if (contadorBarbijos > cantidadJabones && contadorBarbijos > contadorAlcoholes)
	{
		promedio = precioBarbijos/contadorBarbijos;
	}
	else
	{
		if(contadorAlcoholes > contadorBarbijos && contadorAlcoholes > cantidadJabones)
		{
			promedio = precioAlcohol/contadorAlcoholes;
		}
		else
		{
			promedio = precioJabones/cantidadJabones;	
		}	
	}	

	
	console.log(`la cantidad de jabones pedidos es ${cantidadJabones}`);
	console.log(`el precio del alcohol mas barato es ${precioAlcoholBarato}, las unidades son ${contadorAlcoholBarato} y el fabricante es ${fabricanteAlcoholBarato}`);
	console.log(`el promedio de compra del tipo mas pedido es ${promedio}`);

	
}
