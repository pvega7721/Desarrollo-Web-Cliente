mayorEdad = function (e) {
  e.preventDefault();
  edad = document.getElementById("edad").value;
  if (edad < 18) {
  }
};

inicio = () => {
  document.getElementById("enviar").addEventListener("click", mayorEdad);
};
window.addEventListener("DOMContentLoaded", inicio);
