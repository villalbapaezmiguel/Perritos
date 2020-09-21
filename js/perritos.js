function crearTabla() {

    var tablaPerritos = document.getElementById("tablaPerritos");

    for (var i = 0; i < datosDePerritos.length; i++) {

        //Fila de títulos
        var fila = tablaPerritos.insertRow(0);

        var columnaTamanio = fila.insertCell(0);
        var columnaRaza = fila.insertCell(1);
        var columnaEdad = fila.insertCell(2);
        var columnaFoto = fila.insertCell(3);
        var columnaDiscapacidad = fila.insertCell(4);
        var columnaHistoria = fila.insertCell(5);

        columnaTamanio.innerHTML = "tamanio";
        columnaRaza.innerHTML = "raza";
        columnaEdad.innerHTML = "edad";
        columnaFoto.innerHTML = "foto";
        columnaDiscapacidad.innerHTML = "discapacidad";
        columnaHistoria.innerHTML = "historia";
        //Fin fila de títulos
    }
}