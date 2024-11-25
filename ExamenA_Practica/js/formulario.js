var nombre;
var correo;
var nacimiento;
var fechaActual;
var contraseña;
var validar;
var quieroSorpresa;
var noQuieroSorpresa;
var temporizador;
var formulario = function (e) {
  e.preventDefault();
  validar = false;
  nombre = document.getElementById("nombre").value;
  correo = document.getElementById("correo").value;
  nacimiento = new Date(document.getElementById("fechaNacimiento").value);
  fechaActual = new Date();
  contraseña = document.getElementById("contraseña").value;
  quieroSorpresa = document.getElementById("quieroSorpresa").checked;
  noQuieroSorpresa = document.getElementById("noQuieroSorpresa").checked;

  if (nombre.trim() === "") {
    document.getElementById("errorMessage").innerHTML =
      "<p class = 'errorMessage'>Debe introducir un nombre</p>";
    return;
  } else if (correo.trim() === "" || !correo.includes("@")) {
    console.log(correo);
    document.getElementById("errorMessage").innerHTML =
      "<p class = 'errorMessage'>Debe introducir una dirección de correo electrónico válida</p>";
    return;
  } else if (
    nacimiento === "" ||
    fechaActual.getFullYear() - nacimiento.getFullYear() < 18
  ) {
    console.log(nacimiento);
    document.getElementById("errorMessage").innerHTML =
      "<p class = 'errorMessage'>El usuario debe ser mayor de edad</p>";
    return;
  } else if (contraseña.trim() === "" || contraseña.length < 8) {
    console.log(contraseña);
    document.getElementById("errorMessage").innerHTML =
      "<p class = 'errorMessage'>Debe introducir una contraseña con longitud mínima de 8 caracteres</p>";
  } else {
    validar = true;
  }
  if (validar) {
    document.getElementById("sorpresa").style.display = "unset";
  }
  if (quieroSorpresa) {
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
