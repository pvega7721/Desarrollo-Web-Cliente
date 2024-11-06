mostrarInfoProvincia = function (e) {
  e.preventDefault();
  select = document.getElementById("select");
};

inicio = () => {
  document
    .getElementById("enviar")
    .addEventListener("click", mostrarInfoProvincia);
};
window.addEventListener("DOMContentLoaded", inicio);
