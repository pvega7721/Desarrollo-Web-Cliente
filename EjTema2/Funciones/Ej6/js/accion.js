var fecha = new Date();
var ventana = window.open(
  "../ventanaEmergente.html",
  "",
  "width=400, height=400"
);
function abrirVentana() {
  if (fecha.getDate() == 0 || fecha.getDate() == 6) {
  } else {
    ventana.document.body.innerHTML(
      "<img src='imagenes/feliz.png' alt='findesemana'>"
    );
  }
}
