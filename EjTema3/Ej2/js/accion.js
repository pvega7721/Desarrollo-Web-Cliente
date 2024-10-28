function tomarFoco1() {
  document.getElementById("nombre").style.color = "#ff0000";
}
function tomarFoco2() {
  document.getElementById("apellidos").style.color = "#ff0000";
}
function perderFoco1() {
  document.getElementById("nombre").style.color = "#000000";
}
function perderFoco2() {
  document.getElementById("apellidos").style.color = "#000000";
}
function pulsar() {
  document.getElementById("pulsame").style.color = "blue";
}
function over() {
  document.getElementById("cambia").style.borderColor = "green";
}
function overOut() {
  document.getElementById("cambia").style.borderColor = "orange";
}
inicio = () => {
  document.getElementById("nombre").addEventListener("focus", tomarFoco1);
  document.getElementById("apellidos").addEventListener("focus", tomarFoco2);
  document.getElementById("nombre").addEventListener("blur", perderFoco1);
  document.getElementById("apellidos").addEventListener("blur", perderFoco2);
  document.getElementById("pulsame").addEventListener("click", pulsar);
  document.getElementById("cambia").addEventListener("mouseover", over);
  document.getElementById("cambia").addEventListener("mouseout", overOut);
};
window.addEventListener("DOMContentLoaded", inicio);
