var casilla1 = document.getElementById("ch1");
var casilla2 = document.getElementById("ch2");
var casilla3 = document.getElementById("ch3");
var casilla5 = document.getElementById("ch5");

var calcular = function () {
  var suma = 0;
  var checkboxes = [ch1, ch2, ch3, ch5];

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      suma += parseInt(checkbox.value); //los values son string y los paso a entero
    }
  });
  document.getElementById("resultado").innerHTML = `El resultado es: ${suma}`;

  // Desmarcar todos los checkbox
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });
};
inicio = () => {
  document.getElementById("enviar").addEventListener("click", calcular);
};
window.addEventListener("DOMContentLoaded", inicio);
