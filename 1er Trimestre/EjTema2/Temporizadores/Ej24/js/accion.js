var ventana;
function abrirVentana() {
  //abre la ventana
  ventana = window.open(
    "../ventana1.html",
    "ventana emergente",
    "height=200, width=400"
  );
  //Escribe en la ventana nueva
  ventana.document.body.innerHTML += `<h1>Esta página se cerrará en ${seg} segundos</h1>`;
  var seg = parseInt(document.getElementById("segundos").value);
  var intervalo = setInterval(function () {
    document.write(`La ventana emergente se cerrará en ${seg} segundos`);
    seg--;
    if (seg == -1) {
      clearInterval(intervalo);
    }
  }, 1000);
  //temporizador para cerrar la ventana
  var cerrarVentana = setTimeout(function () {
    ventana.close();
  }, seg * 1000);
}
