window.addEventListener("DOMContentLoaded", () => {
  var boton = document.getElementById("boton");
  boton.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarDatos();
  });
});
function mostrarDatos() {
  fetch("https://randomuser.me/api/").then((response) =>
    response.json().then((usuario) => {
      let div = document.getElementById("respuesta");
      div.innerHTML = "";

      let imagen = document.createElement("img");
      imagen.src = `${usuario.results[0].picture.large}`;
      div.appendChild(imagen);

      let nombreYApellidos = document.createElement("p");
      nombreYApellidos.innerHTML = `Nombre: ${usuario.results[0].name.first} ${usuario.results[0].name.last}`;
      div.appendChild(nombreYApellidos);

      let correo = document.createElement("p");
      correo.innerHTML = `Correo: ${usuario.results[0].email}`;
      div.appendChild(correo);

      let ciudad = document.createElement("p");
      ciudad.innerHTML = `Ciudad: ${usuario.results[0].location.city}`;
      div.appendChild(ciudad);
    })
  );
}
