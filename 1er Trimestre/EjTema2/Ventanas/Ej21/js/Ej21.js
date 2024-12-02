var ventana1;
var ventana2;
var color1 = "#FFECA1";
var color2 = "#EFC3CA";
function abrirVentanas() {
  ventana1 = window.open(
    "ventana1.html",
    "ventana 1",
    "width=300, height=200, top=100,left=300"
  );
  ventana2 = window.open(
    "ventana2.html",
    "Ventana 2",
    "width=300, height=200, top=500,left=300"
  );
}

function cerrarVentanas() {
  ventana1.close();
  ventana2.close();
}

function fondoVentana1() {
  ventana1.document.body.style.backgroundColor = color1;
}
function fondoVentana2() {
  ventana2.document.body.style.backgroundColor = color2;
}
