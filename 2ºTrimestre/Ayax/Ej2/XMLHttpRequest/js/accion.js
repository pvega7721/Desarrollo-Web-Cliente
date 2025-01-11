window.addEventListener("DOMContentLoaded", () => {
  var boton = document.getElementById("b1");

  boton.addEventListener("click", (e) => {
    e.preventDefault();
    traerDatos();
  });
});

function traerDatos() {
  //Constante que guarda el objeto XHR
  const peticion = new XMLHttpRequest();
  // Abrimos una conexión GET con la URL de la API.
  peticion.open("GET", "https://jsonplaceholder.typicode.com/posts");
  //El evento readystatechange comprueba el estado de readyState (Opened, Loading, Done...)
  peticion.addEventListener("readystatechange", () => {
    // Si el estado no es "completado" (4), salimos de la función.
    if (peticion.readyState !== 4) {
      return;
    }
    //Si la petición es exitosa
    if (peticion.status >= 200 && peticion.status < 300) {
      // Parseamos el texto de la respuesta como JSON y lo asignamos a la variable datos.
      datos = JSON.parse(peticion.responseText);
      pintarTabla(datos);
    }
  });
  //Enviamos la petición
  peticion.send();
}

function pintarTabla(datos) {

  // Seleccionamos el contenedor donde se insertará la tabla.
  let divTabla = document.getElementById("tabla-container");
  divTabla.innerHTML = "";

  // Creamos los elementos de la tabla
  let tabla = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");

  // Creamos y añadimos las cabeceras de la tabla.
  let thTitle = document.createElement("th");
  thTitle.innerHTML = "Title";
  thead.appendChild(thTitle);

  let thBody = document.createElement("th");
  thBody.innerHTML = "Body";
  thead.appendChild(thBody);

  // Recorremos el array de datos y generamos filas para cada elemento.
  datos.forEach((dato) => {
    tbody.appendChild(pintarFila(dato));
  });

  // Añadimos las partes de la tabla al elemento principal.
  tabla.appendChild(thead);
  tabla.appendChild(tbody);

  // Insertamos la tabla en el contenedor.
  divTabla.appendChild(tabla);
}

function pintarFila(usuario) {
  let tr = document.createElement("tr");

  //celda para el titulo
  let tdTitle = document.createElement("td");
  tdTitle.innerHTML = `${usuario.title}`;
  tr.appendChild(tdTitle);

  //celda para el body
  let tdBody = document.createElement("td");
  tdBody.innerHTML = `${usuario.body}`;
  tr.appendChild(tdBody);

  return tr;
}
