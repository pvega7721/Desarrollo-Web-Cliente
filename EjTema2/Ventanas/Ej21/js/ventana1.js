var ventana2 = window.opener.ventana2;

function escribirVentana2() {
  ventana2.document.body.innerHTML += "<h1>La ventana 1 te saluda</h1>";
}

function colorVentana2() {
  ventana2.document.body.style.backgroundColor = "#7DDA58";
}
