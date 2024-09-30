//1
var fechaActual = new Date();
var miCumpleaños = new Date(2005, 3, 2);
//1.1
document.write(`La fecha acutal es ${fechaActual} <br>`);
document.write(`Mi cumpleaños es ${miCumpleaños} <br>`);
//1.2
document.write(`El año actual es ${fechaActual.getFullYear()} <br>`);
document.write(`Nací en el año ${miCumpleaños.getFullYear()} <br>`);
//1.3
fechaActual.setFullYear(2023);
document.write(
  `El año actual es ${fechaActual.getFullYear().toLocaleString()} <br>`
);
//1.4
var dia = fechaActual.getDate();
var mes = fechaActual.getMonth() + 1;
var anyo = fechaActual.getFullYear();
document.write("Fecha actual: " + dia + "/" + mes + "/" + anyo);
