var nombre;
var tipoEntrada;
var fechaActual;
var fechaEvento;
var pago;
var validar;
var adivinar;
var opcion;
var numAleatorio;
var temporizador;

var validar = function () {
  opcion = document.getElementById("opcion").value;
  adivinar = document.getElementById("adivinar");
  validar = true;
  nombre = document.getElementById("nombre").value;
  tipoEntrada = document.getElementById("tipo").value;
  fechaEvento = new Date(document.getElementById("fecha").value);
  fechaActual = new Date();
  pago = document.getElementById("pago").value;
  if (nombre === "" || !isNaN(nombre)) {
    validar = false;
    document.getElementById("errorDiv").innerHTML =
      "<p class='error'> El nombre es incorrecto</p>";
  }
  if (tipoEntrada === "") {
    validar = false;
    document.getElementById("errorDiv").innerHTML =
      "<p class='error'> Debe seleccionar un tipo de entrada</p>";
  }

  if (fechaEvento < fechaActual) {
    validar = false;
    document.getElementById("errorDiv").innerHTML =
      "<p class='error'> La fecha debe ser posterior a la actual</p>";
  }

  if (isNaN(pago) || pago < 20) {
    validar = false;
    document.getElementById("errorDiv").innerHTML =
      "<p class='error'> El pago debe ser superior a 20 euros</p>";
  }
  if (validar) {
    adivinar.style.display = "unset";
  }
  if (opcion == "par") {
    document.getElementById("adivinarId").innerHTML =
      '<img src="par.jpg" height="500" width="800" alt="Si eliges par aparece esta imagen">';
  } else if (opcion == "impar") {
    document.getElementById("adivinarId").innerHTML =
      '<img src="impar.jpg" height="500" width="800"  alt="Si eliges impar aparece esta imagen">';
    numAleatorio = Math.floor(Math.random(6 - 3 + 1)) + 3;
    console.log(numAleatorio);
    //temporizador que al pasar numAleatorio segundos, muestra la imagen fin.jpg
    temporizador = setTimeout(() => {
      document.getElementById("adivinarId").innerHTML =
        '<img src="fin.jpg" height="500" width="800"  alt="fin">';
    }, numAleatorio * 1000);
  }
};

inicio = () => {
  document.getElementById("reservarBtn").addEventListener("click", validar);
};
window.addEventListener("DOMContentLoaded", inicio);
