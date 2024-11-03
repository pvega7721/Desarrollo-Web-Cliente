var casilla = document.getElementById("casilla");
var marcar = function (e) {
  e.preventDefault(); // Evita que el formulario se recargue
  casilla.checked = true;
};
inicio = () => {
  document.getElementById("enviar").addEventListener("click", marcar);
};
window.addEventListener("DOMContentLoaded", inicio);
