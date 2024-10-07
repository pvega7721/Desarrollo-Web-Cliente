var intervalo1 = setInterval(mostrarMensaje, 2000);
function mostrarMensaje() {
  console.log("En un lugar de la Mancha");
}
//funciona

function parar() {
  clearInterval(intervalo1);
}
//funciona

function boton3sec() {
  setTimeout("console.log('Han pasado 3 segundos'), 3000");
}
//NO FUNCIONA
