window.addEventListener("DOMContentLoaded", () => {
    var contenedor;
    mostrarDatos();
});

//Hay que poner async antes de declarar el método
async function mostrarDatos() {
    contenedor = document.getElementById("datos");
    
    //guarda los datos de la API en la constante response
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); 

    //Convierte los datos de la API en un JSON y los guarda en la variable usuarios
    var usuarios = await response.json(); 
    
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