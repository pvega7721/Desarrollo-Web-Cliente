window.addEventListener("DOMContentLoaded", () => {
  var datos;
});

function traerDatos() {
  const peticion = new XMLHttpRequest();
  peticion.open("GET", "https://opentdb.com/api.php?amount=5&type=multiple");

  peticion.addEventListener("readystatechange", () => {
    if (
      peticion.readyState === 4 &&
      peticion.status >= 200 &&
      peticion.status < 300
    ) {
      datos = JSON.parse(peticion.responseText);
      mostrarLista();
    }
  });
  peticion.send();
}

function mostrarLista() {
  let lista = document.createElement("ul");

  datos.forEach((element) => {
    let item = document.createElement("li");
  });
}
