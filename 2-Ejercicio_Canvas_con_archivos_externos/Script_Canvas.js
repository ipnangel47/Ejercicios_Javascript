var objCanvas = document.getElementById("canvasHTML");
/*
	Obtenemos el objeto canvas creado en el HTML
	y lo guardamos en una variable JS llamada "objCanvas"
*/

var objLienzo = objCanvas.getContext("2d");
/*
	Del objeto objCanvas extraemos el lienzo/contexto 2d
*/
	// Trazado de una linea
	objLienzo.beginPath();			// Inicializa el modo de dibujo
		objLienzo.strokeStyle = "red";	 // Definir esta variable define el color de trazo
		objLienzo.moveTo(50, 10);		 // Movemos el lapiz/cursor
		objLienzo.lineTo(230, 2);		 // Def. el trazo de una linea desde la posicion del cursor
		objLienzo.stroke();				 // Traza
	objLienzo.closePath();			// Finaliza el modo de dibujo