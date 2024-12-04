window.addEventListener("DOMContentLoaded", () => {
  var boton = document.getElementById("boton");
  var datos;

  boton.addEventListener("click", (e) => {
    e.preventDefault();

    if (document.title === "Ejercicio3") {
      traerDatos("respuesta");
    } else if (document.title === "Página 2") {
      traerDatos("imagen");
    }
  });
});

function traerDatos(opcion) {
  const peticion = new XMLHttpRequest();
  peticion.open("GET", "https://yesno.wtf/api");

  peticion.addEventListener("readystatechange", () => {
    if (peticion.readyState !== 4) {
      return;
    }
    if (peticion.status >= 200 && peticion.status < 300) {
      datos = JSON.parse(peticion.responseText);
      if (opcion === "respuesta") {
        mostrarDatos();
      } else if (opcion === "imagen") {
        mostrarImagen();
      }
    }
  });
  peticion.send();
}

function mostrarDatos() {
  document.getElementById("respuesta").innerHTML = `${datos.answer}`;
}

function mostrarImagen() {
  document.getElementById(
    "respuesta"
  ).innerHTML = `<img src="${datos.image}" alt="">`;
}
