var nombre;

//pasa a mayúsculas el contenido del campo y subraya el texto del campo
function convertirMayusculas() {
  nombre.value = nombre.value.toUpperCase();
  nombre.select();
}

function inicio() {
  nombre = document.getElementById("cuadro");
  nombre.addEventListener("blur", convertirMayusculas);
}
//Hace que la función inicio() se ejecute la primera al cargar el documento.
window.addEventListener("DOMContentLoaded", inicio);
