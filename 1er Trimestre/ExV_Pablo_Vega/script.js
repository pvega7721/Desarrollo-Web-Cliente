inicio = () => {
  //A
  document.getElementById("alquilar").style.display = "none";

  let fecha = new Date();
  let dia;
  let mes;
  if (fecha.getDay() == 1) {
    dia = "Lunes";
  } else if (fecha.getDay() == 2) {
    dia = "Martes";
  } else if (fecha.getDay() == 3) {
    dia = "Miercoles";
  } else if (fecha.getDay() == 4) {
    dia = "Jueves";
  } else if (fecha.getDay() == 5) {
    dia = "Viernes";
  } else if (fecha.getDay() == 6) {
    dia = "Sábado";
  } else if (fecha.getDay() == 0) {
    dia = "Domingo";
  }
  if (fecha.getMonth() == 0) {
    mes = "Enero";
  } else if (fecha.getMonth() == 1) {
    mes = "Febrero";
  } else if (fecha.getMonth() == 2) {
    mes = "Marzo";
  } else if (fecha.getMonth() == 3) {
    mes = "Abril";
  } else if (fecha.getMonth() == 4) {
    mes = "Mayo";
  } else if (fecha.getMonth() == 5) {
    mes = "Junio";
  } else if (fecha.getMonth() == 6) {
    mes = "Julio";
  } else if (fecha.getMonth() == 7) {
    mes = "Agosto";
  } else if (fecha.getMonth() == 8) {
    mes = "Septiembre";
  } else if (fecha.getMonth() == 9) {
    mes = "Octubre";
  } else if (fecha.getMonth() == 10) {
    mes = "Noviembre";
  } else if (fecha.getMonth() == 11) {
    mes = "Diciembre";
  }
  var divSaludo = document.getElementById("saludo");
  divSaludo.innerHTML = `¡Bienvenido! Hoy es ${dia}, ${fecha.getDate()} de ${mes} de ${fecha.getFullYear()}`;
  //B
  var titulo1 = "Pesadilla antes de navidad";
  var titulo2 = "El Grinch";
  var titulo3 = "El Lobo de Wall Street";
  var titulo4 = "Spiderman 2";
  var titulo5 = "El señor de los anillos";

  var peliculas = [titulo1, titulo2, titulo3, titulo4, titulo5];
  //C
  //Al pulsar el botón recomendación
  document.getElementById("recomendar").addEventListener("click", () => {
    //Escribe eso en le div
    document.getElementById(
      "resultado"
    ).innerHTML = `<p><b>.....Esperando</b></p>`;
    //Genero numero aleatorio.
    var random = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
    var ofertaNormal = `<h2>Oferta del día: ${peliculas[random]}</h2>`;
    var oferton = `<h2>Ofertón del día: ${peliculas[random]}</h2>`;
    //Si sale la última película, muestra el mensaje ofertón
    if (random === 4) {
      //Espera 5segundos
      var temporizador = setTimeout(() => {
        document.getElementById("resultado").innerHTML = `<h2>${oferton}</h2>`;
      }, 5000);
    } else {
      var temporizador = setTimeout(() => {
        document.getElementById(
          "resultado"
        ).innerHTML = `<h2>${ofertaNormal}</h2>`;
      }, 5000);
    }
  });

  //D
  //Al pulsar el botón Mostrar películas
  document.getElementById("mostrarPeliculas").addEventListener("click", () => {
    //div donde irá la tabla
    var divTabla = document.getElementById("resultado");
    //estructura de la tabla
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");

    //cabeceras
    var thNum = document.createElement("th"); //Numero de película
    thNum.innerHTML = "#";
    thNum.style.fontWeight = "bold";
    //la añado a la cabecera
    thead.appendChild(thNum);

    var thTitulo = document.createElement("th"); //Título de la peli
    thTitulo.innerHTML = "Título";
    thTitulo.style.fontWeight = "bold";
    //la añado a la cabecera
    thead.appendChild(thTitulo);

    var thValor = document.createElement("th"); //Valor
    thValor.innerHTML = "Valor";
    thValor.style.fontWeight = "bold";
    //la añado a la cabecera
    thead.appendChild(thValor);

    //añado la cabecera a la tabla
    table.appendChild(thead);

    var i = 0;
    peliculas.forEach((pelicula) => {
      i++;
      tbody.appendChild(pintarFila(pelicula));
    });
    table.appendChild(thead);
    table.appendChild(tbody);
    divTabla.appendChild(table);

    //Crea cada fila de la tabla con la peli
    function pintarFila(pelicula) {
      //Fila para la tabla
      var tr = document.createElement("tr");

      //Celda para el numero
      var tdNum = document.createElement("td");
      tdNum.innerHTML = i;
      tr.appendChild(tdNum);

      //Celda para el titulo
      var tdTitulo = document.createElement("td");
      tdTitulo.innerHTML = pelicula;
      tr.appendChild(tdTitulo);

      //celda para el valor
      var tdValor = document.createElement("td");
      tdValor.innerHTML = `<input type="text" class="form-control" id="${i}" placeholder="0">`;
      tr.appendChild(tdValor);
      return tr;
    }
    //Al cargar la tabla, muestra el div que ocultamos al principio
    document.getElementById("alquilar").style.display = "unset";
  });

  //E
  //Al pulsar el botón alquilar pelis
  document.getElementById("alquilar").addEventListener("click", () => {
    var inputs = document.getElementsByTagName("input"); //array con los inputs
    //inputs[1].value guarda lo que haya metido en los inputs
    var hayPeliculas = false;
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value >= 1) {
        hayPeliculas = true;
        //Si hay unidades se abre ventana
        var nuevaVentana = window.open(
          "resumen.html",
          "resumen",
          "width=600,height=500"
        );
      } else {
        if (!hayPeliculas) {
          alert("No hay ninguna película que alquilar");
          break; //Para que no muestre un alert por cada película
        }
      }
    }
  });
};
window.addEventListener("DOMContentLoaded", inicio);
