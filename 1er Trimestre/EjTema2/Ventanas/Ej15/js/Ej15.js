var opcion = confirm("¿Quiéres abrir una ventana nueva?");
if (opcion) {
  var nuevaVentana = window.open(
    "",
    "Ventana",
    "width = 200, height = 80, top= 500, left = 500, resizable=yes, scrollbars = yes"
  );
  nuevaVentana.document.write("<h1> Entorno cliente </h1>");
} else {
  alert("La ventana ha sido bloqueada por el navegador");
}
