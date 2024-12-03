window.addEventListener("DOMContentLoaded", () => {
  var boton = document.getElementById("b1");
  var datos;

  boton.addEventListener("click", (e) => {
    e.preventDefault();
    datos = traerDatos();
  });
});

function traerDatos() {
  const peticion = new XMLHttpRequest();
  peticion.open("GET", "https://jsonplaceholder.typicode.com/posts");

  peticion.addEventListener("readystatechange", () => {
    if (peticion.readyState !== 4) {
      return;
    }
    if (peticion.status >= 200 && peticion.status < 300) {
      datos = JSON.parse(peticion.responseText);
      pintarTabla(datos);
    }
  });
  peticion.send();
}

function pintarTabla(datos) {
  let divTabla = document.getElementById("tabla-container");
  divTabla.innerHTML = "";
  let tabla = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");

  let thTitle = document.createElement("th");
  thTitle.innerHTML = "Title";
  thead.appendChild(thTitle);

  let thBody = document.createElement("th");
  thBody.innerHTML = "Body";
  thead.appendChild(thBody);

  datos.forEach((dato) => {
    tbody.appendChild(pintarFila(dato));
  });

  tabla.appendChild(thead);
  tabla.appendChild(tbody);
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
