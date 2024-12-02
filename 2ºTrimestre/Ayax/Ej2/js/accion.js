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
  peticion.send();

  peticion.addEventListener("readystatechange", () => {
    if (peticion.readyState !== 4) {
      return;
    }
    if (peticion.status >= 200 && peticion.status < 300) {
      return JSON.parse(peticion.responseText);
    }
  });
}

peticion.addEventListener("readystatechange", () => {
  if (peticion.readyState !== 4) {
    return;
  }
  if (peticion.status >= 200 && peticion.status < 300) {
    let usuarios = JSON.parse(peticion.responseText);
    console.log(usuarios);

    var tabla = document.createElement("table");
    boton.addEventListener("click", () => {
      var cabecera = document.createElement("thead");

      tabla.appendChild(cabecera);

      var trCabecera = document.createElement("tr");
      cabecera.appendChild(trCabecera);
      var tdTitle = document.createElement("th");
      tdTitle.innerHTML = "<h2>Title</h2>";
      trCabecera.appendChild(tdTitle);

      tabla.appendChild(thBody);

      usuarios.forEach((el) => {
        pintarFila(el);
      });

      document.getElementById("tabla-container").appendChild(tabla);

      function pintarFila(el) {
        var tr = document.createElement("tr");

        var tdTitulo = document.createElement("td");
        tdTitulo.innerHTML = el.title;
        tr.appendChild(tdTitulo);

        var tdBody = document.createElement("td");
        tdBody.innerHTML = el.body;
        tr.appendChild(tdBody);
      }
    });
  }
});
