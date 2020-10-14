function crearTabla() {

    var tablaPerritos = document.getElementById("tablaPerritos");
    var fila = tablaPerritos.insertRow(0);//crea los espacios para las filas

    var columnaTamanio = fila.insertCell(0);//rellena los espacios de las filas
    var columnaRaza = fila.insertCell(1);
    var columnaEdad = fila.insertCell(2);
    var columnaFoto = fila.insertCell(3);
    var columnaDiscapacidad = fila.insertCell(4);
    var columnaHistoria = fila.insertCell(5);

    columnaTamanio.innerHTML = "tamanio";//el relleno
    columnaRaza.innerHTML = "raza";
    columnaEdad.innerHTML = "edad";
    columnaFoto.innerHTML = "foto";
    columnaDiscapacidad.innerHTML = "discapacidad";
    columnaHistoria.innerHTML = "historia";

    let numeroDeFila = 1;

    for (var posicion = 0;
        posicion < datosDePerritos.length;
        posicion++) {

        let filaDatos = tablaPerritos.insertRow(numeroDeFila);

        let columnaTamanioDatos = filaDatos.insertCell(0);
        let columnaRazaDatos = filaDatos.insertCell(1);
        let columnaEdadDatos = filaDatos.insertCell(2);
        let columnaFotoDatos = filaDatos.insertCell(3);
        let columnaDiscapacidadDatos = filaDatos.insertCell(4);
        let columnaHistoriaDatos = filaDatos.insertCell(5);

        columnaTamanioDatos.innerHTML = datosDePerritos[posicion].tamanio;
        columnaRazaDatos.innerHTML = datosDePerritos[posicion].raza;
        columnaEdadDatos.innerHTML = datosDePerritos[posicion].edad;
        columnaFotoDatos.innerHTML = datosDePerritos[posicion].foto;
        columnaDiscapacidadDatos.innerHTML = datosDePerritos[posicion].discapacidad;
        columnaHistoriaDatos.innerHTML = datosDePerritos[posicion].historia;

        numeroDeFila++;
    }
}

function filtroDeTmanio() {
    let filtroTamanioDePerrito = document.getElementById("tamanio").value;

    var tablaPerritos = document.getElementById("tablaPerritos");
    tablaPerritos.innerHTML = "";

    var fila = tablaPerritos.insertRow(0);//crea los espacios para las filas

    var columnaTamanio = fila.insertCell(0);//rellena los espacios de las filas
    var columnaRaza = fila.insertCell(1);
    var columnaEdad = fila.insertCell(2);
    var columnaFoto = fila.insertCell(3);
    var columnaDiscapacidad = fila.insertCell(4);
    var columnaHistoria = fila.insertCell(5);

    columnaTamanio.innerHTML = "tamanio";//el relleno
    columnaRaza.innerHTML = "raza";
    columnaEdad.innerHTML = "edad";
    columnaFoto.innerHTML = "foto";
    columnaDiscapacidad.innerHTML = "discapacidad";
    columnaHistoria.innerHTML = "historia";

    let numeroDeFila = 1;

    for (var posicion = 0;
        posicion < datosDePerritos.length;
        posicion++) {

        let filaDatos = tablaPerritos.insertRow(numeroDeFila);

        let columnaTamanioDatos = filaDatos.insertCell(0);
        let columnaRazaDatos = filaDatos.insertCell(1);
        let columnaEdadDatos = filaDatos.insertCell(2);
        let columnaFotoDatos = filaDatos.insertCell(3);
        let columnaDiscapacidadDatos = filaDatos.insertCell(4);
        let columnaHistoriaDatos = filaDatos.insertCell(5);

        let tamanio = datosDePerritos[posicion].tamanio;
        
        if (filtroTamanioDePerrito == tamanio || filtroTamanioDePerrito === "mostrar") {
            columnaTamanioDatos.innerHTML = tamanio;
            columnaRazaDatos.innerHTML = datosDePerritos[posicion].raza;
            columnaEdadDatos.innerHTML = datosDePerritos[posicion].edad;
            columnaFotoDatos.innerHTML = datosDePerritos[posicion].foto;
            columnaDiscapacidadDatos.innerHTML = datosDePerritos[posicion].discapacidad;
            columnaHistoriaDatos.innerHTML = datosDePerritos[posicion].historia;
        }
        numeroDeFila++;
    }
}