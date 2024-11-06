var imprimirNombre = function () {
  input = document.getElementById("nombre"); //El input como objeto
  nombre = document.getElementById("nombre").value; //El texto del input
  div = document.getElementById("texto"); //El div como objeto
  div.innerHTML += `<p class="resultado"><b>Nombre: ${nombre}</b></p>`;

  input.value = "";
  input.focus();
};

inicio = () => {
  document.getElementById("enviar").addEventListener("click", imprimirNombre);
};
window.addEventListener("DOMContentLoaded", inicio);
