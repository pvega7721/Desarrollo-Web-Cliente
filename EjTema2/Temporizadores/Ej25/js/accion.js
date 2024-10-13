//1. abrir ventana
var ventanaEmergente;
function abrirVentana() {
  ventanaEmergente = window.open(
    "ventanaEmergente.html",
    "",
    "width=500, height=500"
  );
}
//2. crear un temporizador para que la ventana se cierre en los segundos introducidos.
var seg = parseInt(document.getElementById("segundos").value);
setTimeout(function () {
  ventanaEmergente.close();
}, seg * 1000);
