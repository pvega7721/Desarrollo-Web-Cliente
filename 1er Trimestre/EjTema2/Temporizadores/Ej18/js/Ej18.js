let colorNaranja = true;
function cambiarColor() {
  if (colorNaranja) {
    document.body.style.backgroundColor = "orange";
  } else {
    document.body.style.backgroundColor = "blue";
  }
  colorNaranja = !colorNaranja;
}
var temporizador = setInterval(cambiarColor, 1000);

function detener() {
  clearInterval(temporizador);
}
