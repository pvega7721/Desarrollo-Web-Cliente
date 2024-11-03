var cambiarTexto = confirm("¿Quiéres cambiar el texto?");
var cambiarColor;

if (cambiarTexto) {
  document.getElementById("texto").innerHTML = "Texto Cambiado";
} else {
  cambiarColor = confirm("¿Quiéres cambiar el color de la letra?");
  if (cambiarColor) {
    document.getElementById("texto").style.color = "orange";
  }
}
