window.addEventListener("DOMContentLoaded", () => {
    var contenedor;
    mostrarDatos();
});

async function mostrarDatos() {
    contenedor = document.getElementById("datos");
    var response = await fetch("https://jsonplaceholder.typicode.com/users"); //guarda los datos de la API en la variable response
    var usuarios = await response.json(); //Convierte los datos de la API en un JSON y los guarda en la variable usuarios
    
    usuarios.forEach(usuario => {
        if(usuario.id == 5){
            nombre = document.createElement("p");
            nombre.innerHTML = `Nombre: ${usuario.name}`;
            contenedor.appendChild(nombre);

            username = document.createElement("p");
            username.innerHTML = `<br>Usuario: ${usuario.username}`;
            contenedor.appendChild(username);

            correo = document.createElement("p");
            correo.innerHTML = `<br>Correo: ${usuario.email}`;
            contenedor.appendChild(correo);

            direccion = document.createElement("p");
            direccion.innerHTML = `<br>Dirección: ${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}`;
            contenedor.appendChild(direccion);
        }
    });
}