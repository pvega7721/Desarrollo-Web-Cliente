function abrirVentana() {
  ventana = window.open(
    "./ventanaEmergente.html",
    "ventanaEmergente",
    "width=400, height=400"
  );
}

//ventana.document.write("a"); //Solo funciona si escribo algo antes¿¿¿¿
/*
  if (fecha.getDay() == 0 || fecha.getDay() == 6) {
    //Es getDay() no getDate(), getDay es la que da el número de la semana
    ventana.document.body.innerHTML +=
      "<img src='imagenes/feliz.png' alt='finDeSemana'>";
  } else {
    ventana.document.body.innerHTML +=
      '<img src="imagenes/triste.jpg" alt="noFinDeSemana" />';
    //innerHTML no se esribe con (), se escribe con =
  }
}
*/
