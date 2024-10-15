var fecha = new Date();
var ventana;
function abrirVentana() {
  ventana = window.open(
    "file:///C:/Github-asignaturas/Desarrollo-Web-Cliente/EjTema2/Funciones/Ej6/ventanaEmergente.html",
    "ventanaEmergente",
    "width=400, height=400"
  );
  if (fecha.getDate() == 0 || fecha.getDate() == 6) {
    ventana.document.body.innerHTML(
      "<img src='imagenes/feliz.png' alt='finFeSemana'>"
    );
  } else {
    ventana.document.body.innerHTML(
      '<img src="imagenes/triste.jpg" alt="noFinDeSemana" />'
    );
  }
}
