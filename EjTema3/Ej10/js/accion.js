var tiempoRestante = 30;
var temporizador;

function iniciar() {
  /*El temporizador comprueba que el tiempo restante sea > 0, resta un segundo y lo muestra.
    Si el tiempo llega a 0, para el temporizador y muestra el mensaje de tiempo agotado.
    */ temporizador = setInterval(function () {
    if (tiempoRestante > 0) {
      tiempoRestante--;
      document.getElementById("temporizador").innerHTML = `${tiempoRestante}`;
    } else {
      clearInterval(temporizador);
      document.getElementById("temporizador").innerHTML = "!Tiempo agotado¡";
    }
  }, 1000);
}
function pausar() {
  /*Comprueba que exista un temporizador activo, lo para y lo pone a null 
  para evitar que intente parar un temporizador que no está corriendo*/
  if (!temporizador) {
    document.getElementById("temporizador").innerHTML =
      "Debe haber un temporizador activo";
  } else {
    clearInterval(temporizador);
    temporizador = null;
  }
}
function reiniciar() {
  /*Para el temporizador, lo resetea y comienza uno nuevo */
  clearInterval(temporizador);
  temporizador = null;
  tiempoRestante = 30;
  document.getElementById("temporizador").innerHTML = `${tiempoRestante}`;
  iniciar();
}

inicio = () => {
  document.getElementById("iniciar").addEventListener("click", iniciar);
  document.getElementById("pausar").addEventListener("click", pausar);
  document.getElementById("reiniciar").addEventListener("click", reiniciar);
};
window.addEventListener("DOMContentLoaded", inicio);
