var ventana;
function abrirVentana() {
  //abre la ventana
  ventana = window.open(
    "../ventana1.html",
    "ventana emergente",
    "height=200, width=400"
  );
  //Escribe en la ventana nueva
  ventana.document.body.innerHTML +=
    "<h1>Esta página se cerrará en 10 segundos</h1>";
  //temporizador para cerrar la ventana en 10seg
  var cerrarVentana = setTimeout(function () {
    ventana.close();
  }, 10000);
  //funciona

  var seg = 10;
  var intervalo = setInterval(function () {
    do {
      document.write(`La ventana emergente se cerrará en ${seg} segundos`);
      seg--;
    } while (seg >= 0 && !ventana.closed);
  }, 1000);
  if (seg == 0) {
    clearInterval(intervalo);
  }
}
