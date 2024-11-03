var nombre = document.getElementById("nombre");
var boton = document.getElementById("Enviar");
var promptNombre;
var preguntarNombre = function () {
  promptNombre = prompt("¿Cuál es tu nombre?");
  if (promptNombre) {
    nombre.value = promptNombre;
    boton.value = "pulsado";
  }
};

inicio = () => {
  document.getElementById("Enviar").addEventListener("click", preguntarNombre);
};
window.addEventListener("DOMContentLoaded", inicio);
