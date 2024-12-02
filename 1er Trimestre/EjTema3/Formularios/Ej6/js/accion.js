var formularios = document.getElementsByTagName("form");
var formulario = formularios[0];
var elementos = formulario.elements; //todos los elementos del formulario
var radios = []; //Array con los inputs del formulario
var rMarcados;
var marcados = function (e) {
  e.preventDefault(); // Evita que el formulario se recargue

  for (let i = 0; i < elementos.length; i++) {
    if (elementos[i].tagName === "INPUT" && elementos[i].type === "radio") {
      radios.push(elementos[i]);
    }
  }
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
