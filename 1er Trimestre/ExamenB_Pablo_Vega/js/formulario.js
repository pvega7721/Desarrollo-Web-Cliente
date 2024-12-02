var validacion = function () {
  //Declaramos las variables que vamos a usar
  var numAleatorio;
  var temporizador;
  var opcion = document.getElementById("opcion").value;
  var adivinar = document.getElementById("adivinar");
  var validar = true;
  var nombre = document.getElementById("nombre").value;
  var tipoEntrada = document.getElementById("tipo").value;
  var fechaEvento = new Date(document.getElementById("fecha").value);
  var fechaActual = new Date();
  var pago = document.getElementById("pago").value;

  //Comprobaciones
  if (nombre === "" || !isNaN(nombre)) {
    //Si el nombre está vacío o es un número, muestra el mensaje de error
    validar = false;
    document.getElementById("errorDiv").innerHTML =
      "<p class='error'> El nombre es incorrecto</p>";
    return; //Debe haber return en cada una para que muestre el mensaje bien
  }
  if (tipoEntrada === "") {
    //Si no elige entrada, muestra el mensaje de error
    validar = false;
    document.getElementById("errorDiv").innerHTML =
      "<p class='error'> Debe seleccionar un tipo de entrada</p>";
    return;
  }

  if (isNaN(fechaEvento) || fechaEvento - fechaActual < 18) {
    //Si la fecha no es válida o es menor de 18 años, muestra el mensaje de error
    validar = false;
    document.getElementById("errorDiv").innerHTML =
      "<p class='error'> La fecha debe ser posterior a la actual</p>";
    return;
  }

  if (isNaN(pago) || pago < 20) {
    //Si introduce algo que no sea un número mayor a 20 muestra el mensaje de error
    validar = false;
    document.getElementById("errorDiv").innerHTML =
      "<p class='error'> El pago debe ser superior a 20 euros</p>";
    return;
  }
  //Si ha llegado hasta aqui, es que las comprobaciones son correctas y mostrará el div
  if (validar) {
    adivinar.style.display = "unset";
  }
  if (opcion == "par") {
    //Si elige la opción par, inserta una imagen
    document.getElementById("adivinarId").innerHTML =
      '<img src="par.jpg" height="500" width="800" alt="Si eliges par aparece esta imagen">';
  } else if (opcion == "impar") {
    /*Si elige la opción impar, inserta una imagen, genera un número aleatorio entre 3 y 6 y, 
    al pasar ese número de segundos, cambia la imagen
  */
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
  document.getElementById("reservarBtn").addEventListener("click", validacion);
};
window.addEventListener("DOMContentLoaded", inicio);
