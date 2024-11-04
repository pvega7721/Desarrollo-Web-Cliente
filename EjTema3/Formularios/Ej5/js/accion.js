var radios = document.getElementsByTagName("input"); //crea un array con los inputs de la web
var rMarcados;
var marcados = function () {
  rMarcados = "";
  for (var radio of radios) {
    if (radio.checked) {
      rMarcados += radio.value + ", ";
    }
  }
  alert(`Has marcado: ${rMarcados}`);
};
inicio = () => {
  document.getElementById("enviar").addEventListener("click", marcados);
};
window.addEventListener("DOMContentLoaded", inicio);
