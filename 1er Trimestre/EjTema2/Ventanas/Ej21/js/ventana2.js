var ventana1 = window.opener.ventana1;
function escribirVentana1() {
  ventana1.document.body.innerHTML += "<h1>La ventana 2 te saluda</h1>";
}
function colorVentana1() {
  ventana1.document.body.style.backgroundColor = "#5DE2E7";
}
