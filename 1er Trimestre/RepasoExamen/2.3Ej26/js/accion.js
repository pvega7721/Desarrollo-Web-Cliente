var ventana;
var intervalo;
var tiempoRestante;
var abrirVentana = function () {
  //accede al campo cuando le ha dado al botón
  var tiempoIntroducido = document.getElementById("segundos").value;
  //Abre la ventana
  ventana = window.open(
    "Emergente.html",
    "nuevaVentana",
    "width=400,height=200"
  );
  //asigna el valor introducido en el input
  tiempoRestante = tiempoIntroducido;
  intervalo = setInterval(() => {
    //Muestra el temporizador en la ventana
    ventana.document.getElementById("cuentaAtras").textContent = tiempoRestante;
    if (tiempoRestante <= 0) {
      clearInterval(intervalo);
      ventana.close();
      document.getElementById(
        "resultado"
      ).textContent = `Ya han pasado ${tiempoIntroducido} segundos y se ha cerrado la ventana emergente`;
    }
    tiempoRestante--;
  }, 1000);
};
