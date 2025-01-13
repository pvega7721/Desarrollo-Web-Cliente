inicio = () => {
  //Creo nuevo objeto XMLHttpRequest
  //Contiene el array de objetos devuelto por la api
  const peticion = new XMLHttpRequest();

  //abrimos la conexión Get ("tipo", "URL")
  peticion.open("GET", "https://jsonplaceholder.typicode.com/users/5");

  //Enviamos la petición
  peticion.send();

  peticion.addEventListener("readystatechange", () => {
    if (peticion.readyState !== 4) {//si no se optiene respuesta, no hace nada
      return;
    }
    if (peticion.status >= 200 && peticion.status < 300) {
       //si ha llegado aquí la respuesta se ha completado con exito
      console.log("éxito");
      //convierte lo que devuelve la petición a JSON
      let usuario = JSON.parse(peticion.responseText);

      document.getElementById(
        "datos"
      ).innerHTML = `<h1>Nombre: ${usuario.name}</h1>`;
      document.getElementById(
        "datos"
      ).innerHTML += `<p>Usuario: ${usuario.username}</p>`;
      document.getElementById(
        "datos"
      ).innerHTML += `<p>Correo: ${usuario.email}</p>`;
      document.getElementById(
        "datos"
      ).innerHTML += `<p>Dirección: ${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city} </p>`;
    }
  });
};
window.addEventListener("DOMContentLoaded", inicio());
