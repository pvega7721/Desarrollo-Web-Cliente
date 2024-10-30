function validar(e) {
  e.preventDefault(); // Evita que el formulario se recargue
  var valido = true; //controla que el formulario completo sea válido o no

  var nombre = document.getElementById("nombre").value;
  var apellidos = document.getElementById("apellidos").value;
  var edad = document.getElementById("edad").value;
  var provincia = document.getElementById("provincia");
  var codigoError = 0;

  formulario = document.getElementById("formulario");

  if (nombre == "" || apellidos == "" || edad == "") {
    valido = false;
    if (codigoError == 0) {
      codigoError = 1;
    }
  }
  if (isNaN(edad) || edad < 0 || edad > 105) {
    valido = false;
    if (codigoError == 0) {
      codigoError = 2;
    }
  }
  if (provincia.value == "0") {
    valido = false;
    if (codigoError == 0) {
      codigoError = 3;
    }
  }
  //mostrar errores
  if (codigoError == 1) {
    document.getElementById("resultado").innerHTML =
      '<p style="color: red;">Los campos "Nombre", "Apellidos" o "Edad" no pueden estar vacíos</p>';
  } else if (codigoError == 2) {
    document.getElementById("resultado").innerHTML =
      '<p style="color: red;">La edad debe ser un número y estar entre 0-105';
  } else if (codigoError == 3) {
    document.getElementById("resultado").innerHTML =
      '<p style="color: red;">Debes seleccionar una provincia';
  }

  if (valido) {
    var enviar = confirm("¿Quiéres enviar el formulario?");
    if (enviar) {
      formulario.submit();
    }
  }
}

inicio = () => {
  document.getElementById("enviar").addEventListener("click", validar);
};
window.addEventListener("DOMContentLoaded", inicio);
