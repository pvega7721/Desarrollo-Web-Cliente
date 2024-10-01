document.write("<h1>Fecha actual en diferentes formatos</h1>");
var fechaActual = new Date();
//1.
document.write(`1. ${fechaActual.toLocaleDateString()} <br>`);
//2.
document.write(`2. ${fechaActual.toDateString()}<br>`);
//3.
document.write(`3. ${fechaActual.toLocaleString()}<br>`);
//4.
document.write(`4. ${fechaActual.toLocaleTimeString()}`);
