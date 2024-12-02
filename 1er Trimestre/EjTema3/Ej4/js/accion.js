var numero;
sumarUno = (e) => {
  numero = numero + 1;
  document.getElementById("num").innerHTML = numero;
  mensaje();
};
restarUno = (e) => {
  numero = numero - 1;
  document.getElementById("num").innerHTML = numero;
  mensaje();
};
function mensaje() {
  if (numero === 3) {
    document.getElementById("num").innerHTML = numero + " El número es 3";
  }
}
inicio = () => {
  numero = 5;
  document.getElementById("sumar").addEventListener("click", sumarUno);
  document.getElementById("restar").addEventListener("click", restarUno);
};
window.addEventListener("DOMContentLoaded", inicio);
