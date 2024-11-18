var ventana;
var nSegundos;
var temporizador;
function abrirVentana() {
  nSegundos = document.getElementById("segundos").value;
  ventana = window.open("ventana.html", "ventana1", "height=200, width=200");
  setTimeout(() => {
    ventana.close();
  }, nSegundos * 1000);
  setInterval(() => {
    ventana.document.body.innerHTML = 

}, 1000)
}
