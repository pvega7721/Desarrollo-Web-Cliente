function ocultar1(e) {
  e.preventDefault;
  var p1 = document.getElementById("contenidos1");
  p1.style.display = "none";
}
function ocultar2() {}
function ocultar3() {}

inicio = () => {
  document.getElementById("enlace1").addEventListener("click", ocultar1);
  document.getElementById("enlace2").addEventListener("click", ocultar2);
  document.getElementById("enlace3").addEventListener("click", ocultar3);
};
window.addEventListener("DOMContentLoaded", inicio);
