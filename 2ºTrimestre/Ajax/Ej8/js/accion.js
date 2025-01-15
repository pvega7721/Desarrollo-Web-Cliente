window.addEventListener("DOMContentLoaded", () => {
  mostrarDatos();
});
function mostrarDatos() {
  fetch("https://randomuser.me/api/?results=10").then((response) => {
    response.json().then((usuarios) => {
      let contenedor = document.getElementById("contenedor");
      var i = 0;
      usuarios.results.forEach((usuario) => {
        i++;
        let div = document.createElement("div");

        let imagen = document.createElement("img");
        imagen.src = `${usuario.results[i].picture.large}`;
        div.appendChild(imagen);

        let nombreYApellidos = document.createElement("p");
        nombreYApellidos.innerHTML = `Nombre: ${usuario.results[i].name.first} ${usuario.results[i].name.last}`;
        div.appendChild(nombreYApellidos);

        let correo = document.createElement("p");
        correo.innerHTML = `Correo: ${usuario.results[i].email}`;
        div.appendChild(correo);

        let calleYNumero = document.createElement("p");
        calleYNumero.innerHTML = `${usuario.results[i].location.street.name}, ${usuario.results[i].location.street.number} `;
        div.appendChild(calleYNumero);

        let ciudad = document.createElement("p");
        ciudad.innerHTML = `Ciudad: ${usuario.results[i].location.city}`;
        div.appendChild(ciudad);

        contenedor.appendChild(div);
      });
    });
  });
}
