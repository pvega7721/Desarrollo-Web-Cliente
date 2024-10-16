var ventana;
function listaOrdenada() {
  ventana = window.open(
    "../ventana.html",
    "ventanaEmergente",
    "width=700, height=400"
  );
  var filas = ventana.prompt("Introduce un número entre 1 y 20"); //No funciona pero lo voy a hacer suponiendo que tiene un número
  ventana.close();
  var imprimirFilas = (filas) => {
    document.body.innerHTML += "<ol>";
    for (let i = 0; i < filas; i++) {
      document.body.innerHTML += "<li></li>";
    }
    document.body.innerHTML += "</ol>";
  };
  imprimirFilas;
}
