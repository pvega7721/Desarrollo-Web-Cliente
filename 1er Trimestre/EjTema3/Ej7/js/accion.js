function validar(e) {
  e.preventDefault(); // Evita que el formulario se recargue
  var nombre = false;
  var apellidos = false;
  //nombre y apellidos deben declararse dentro de la función para que no se declaren al cargar la página, sino al hacer click
  var nombre = document.getElementById("nombre").value;
  var apellidos = document.getElementById("apellido").value;
  var formulario = document.getElementById("formulario");
  if (
    //Si el nombre empieza por vocal, muestra un mensaje indicándolo.
    nombre.startsWith("a") ||
    nombre.startsWith("e") ||
    nombre.startsWith("i") ||
    nombre.startsWith("o") ||
    nombre.startsWith("u") ||
    nombre.startsWith("A") ||
    nombre.startsWith("E") ||
    nombre.startsWith("I") ||
    nombre.startsWith("O") ||
    nombre.startsWith("U")
  ) {
    nombre = true;
  } else {
    document.getElementById("mensajeErrorNombre").innerHTML =
      '<p style="color: red;">El nombre no comienza por vocal</p>';
  }
  var arrayApellidos = apellidos.trim().split(" ");
  if (arrayApellidos.length >= 2) {
    //Si el apellido tiene más de dos palabras, muestra un mensaje indicándolo.
    document.getElementById("mensajeErrorApellidos").innerHTML =
      '<p style="color: red;">El apellido tiene 2 palabras o más</p>';
  } else {
    apellidos = true;
  }
  if (nombre == true && apellidos == true) {
    formulario.submit();
  }
}

inicio = () => {
  document.getElementById("validacion").addEventListener("click", validar);
};
window.addEventListener("DOMContentLoaded", inicio);
