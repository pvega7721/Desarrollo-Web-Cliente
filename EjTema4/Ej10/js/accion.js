function anyadirElemento() {
  var lista = document.getElementById("lista");

  var nuevoLi = document.createElement("li");
  nuevoLi.textContent = "Nuevo elemento";

  lista.appendChild(nuevoLi);
}

inicio = () => {
  document.getElementById("anyadir").addEventListener("click", anyadirElemento);
};
window.addEventListener("DOMContentLoaded", inicio);
