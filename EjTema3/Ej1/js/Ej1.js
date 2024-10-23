document.getElementById("cuadro").addEventListener("blur", alertar);

function alertar() {
  var nombre = document.getElementById("cuadro");
  console.log(nombre.value);
}
