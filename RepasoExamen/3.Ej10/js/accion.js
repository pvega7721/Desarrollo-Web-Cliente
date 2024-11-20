//El tempoirzador empieza en 30 segundos
var tiempoRestante = 30;
//Declaro el intervalo arriba para poder llamarlo luego varias veces
var intervalo;
var iniciar = function () {
    //Todo lo de la función flecha se hace cada segundo
  intervalo = setInterval(() => {
    //Muestra el tiempo que queda dentro del div
    document.getElementById("temporizador").textContent = tiempoRestante;
    //cuando termina el temporizador, lo para y muestra el mensaje
    if (tiempoRestante <= 0) {
      clearInterval(intervalo);
      document.getElementById("temporizador").textContent = "Tiempo agotado!";
    }
    tiempoRestante--;
  }, 1000);
};
var pausar = function () {
  clearInterval(intervalo);
};
//para el temporizador, lo reinicia y muestra el tiempo en el div
var reiniciar = function () {
  pausar();
  tiempoRestante = 30;
  document.getElementById("temporizador").textContent = tiempoRestante;
};
//Precarga todos los eventos 
inicio = () => {
  document.getElementById("iniciar").addEventListener("click", iniciar);
  document.getElementById("pausar").addEventListener("click", pausar);
  document.getElementById("reiniciar").addEventListener("click", reiniciar);
};
window.addEventListener("DOMContentLoaded", inicio);



