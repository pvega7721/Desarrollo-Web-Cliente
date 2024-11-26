var formulario = function (e) {
  e.preventDefault();
  //Declaramos las variables que vamos a usar
  var temporizador;
  var validar = false;
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("correo").value;
  var nacimiento = new Date(document.getElementById("fechaNacimiento").value);
  var fechaActual = new Date();
  var contraseña = document.getElementById("contraseña").value;
  var quieroSorpresa = document.getElementById("quieroSorpresa").checked;
  var noQuieroSorpresa = document.getElementById("noQuieroSorpresa").checked;

  //Comprobaciones
  if (nombre.trim() === "" || !isNaN(nombre)) {
    //Si el nombre está vacío o es un número, muestra el mensaje de error
    document.getElementById("errorMessage").innerHTML =
      "<p class = 'errorMessage'>Debe introducir un nombre</p>";
    return;
  } else if (correo.trim() === "" || !correo.includes("@")) {
    //Si el correo está vacío o no contiene @, muestra el mensaje de error
    console.log(correo);
    document.getElementById("errorMessage").innerHTML =
      "<p class = 'errorMessage'>Debe introducir una dirección de correo electrónico válida</p>";
    return;
  } else if (
    //Comprueba que la fecha sea una fecha válida y tenga más de 18
    isNaN(nacimiento.getTime()) ||
    fechaActual.getFullYear() - nacimiento.getFullYear() < 18
  ) {
    document.getElementById("errorMessage").innerHTML =
      "<p class = 'errorMessage'>El usuario debe ser mayor de edad</p>";
    return;
  } else if (contraseña.trim() === "" || contraseña.length < 8) {
    //Si la contraseña está vacía o tiene menos de 8 caracteres, muestra el error
    document.getElementById("errorMessage").innerHTML =
      "<p class = 'errorMessage'>Debe introducir una contraseña con longitud mínima de 8 caracteres</p>";
  } else {
    validar = true;
  }
  //Si ha llegado hasta aquí, es que las comprobaciones son correctas y mostrará el div
  if (validar) {
    document.getElementById("sorpresa").style.display = "unset";
  }
  if (quieroSorpresa) {
    /*Si quiere sorpresa, genera un número aleatorio entre 1 y 2,
    si sale 1 muestra una imagen y si sale 2 muestra otra*/
    let aleatorio = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    if (aleatorio === 1) {
      document.getElementById("sorpresaId").innerHTML =
        '<img src="sorpresa1.jpg" alt="Imagen sorpresa1">';
    } else if (aleatorio === 2) {
      document.getElementById("sorpresaId").innerHTML =
        '<img src="sorpresa2.jpg" alt="Imagen sorpresa2">';
    }
    console.log(aleatorio);
  } else if (noQuieroSorpresa) {
    /*Si no quiere sorpresa, inicia un temporizador de 3 segundos y muestra una imagen*/
    temporizador = setTimeout(() => {
      document.getElementById("sorpresaId").innerHTML =
        '<img src="sorpresaNO.jpg" alt="Imagen No sorpresa">';
    }, 3000);
  }
};
inicio = () => {
  document.getElementById("enviarButton").addEventListener("click", formulario);
};
window.addEventListener("DOMContentLoaded", inicio);
