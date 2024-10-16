var ventana;

function listaOrdenada() {
  ventana = window.open(
    "./ventana.html",
    "ventanaEmergente",
    "width=700, height=400"
  );

  if (ventana) {
    var filas = ventana.prompt("Introduce un número entre 1 y 20"); //No funciona

    var imprimirFilas = (filas) => {
      document.body.innerHTML += "<ol>";

      for (let i = 0; i < filas; i++) {
        document.body.innerHTML += `<li>${i + 1}</li>`;
      }

      ventana.close();
      document.body.innerHTML += "</ol>";
    };

    imprimirFilas(filas);
  }
}

listaOrdenada();
