window.addEventListener("DOMContentLoaded", () => {
  var boton = document.getElementById("boton");
  boton.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarDatos();
  });
});

function mostrarDatos() {
  fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json().then((usuarios) => {
      console.log(usuarios);
      //Estructura de la tabla
      tabla = document.createElement("table");
      cabecera = document.createElement("thead");
      tr = document.createElement("tr");
      document.createElement("th");
      body = document.createElement("tbody");
    })
  );
}
