window.addEventListener("DOMContentLoaded", () => {
    var contenedor;
    mostrarDatos();
});

function mostrarDatos() {
    contenedor = document.getElementById("datos");
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json().then((usuarios) => {
        usuarios.forEach(usuario => {
            if(usuario.id == 5){
                console.log(usuario);
                //inserta el nombre de usuario en el div
                let nombre = document.createElement("p");
                nombre.innerHTML = `Nombre: ${usuario.name}`;
                contenedor.appendChild(nombre);

                //inserta el nombre de usuario en el div
                let username = document.createElement("p");
                username.innerHTML += `<br>Usuario: ${usuario.username}`;
                contenedor.appendChild(username);

                //inserta el correo de usuario en el div
                let correo = document.createElement("p");
                correo.innerHTML += `<br>Correo: ${usuario.email}`;
                contenedor.appendChild(correo);

                //inserta la dirección de usuario en el div
                let direccion = document.createElement("p");
                direccion.innerHTML += `<br>Dirección: ${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}`;
                contenedor.appendChild(direccion);
            }
        });
    }
    ))
}