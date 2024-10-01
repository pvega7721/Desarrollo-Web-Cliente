var dia = prompt("Introduce tu día de nacimiento");
var mes = prompt("Introduce tu mes de nacimiento");
var anyo = prompt("Introduce tu año de nacimiento");

var cumpleanyos = new Date(anyo, mes, dia);
var anyoActual = new Date().getFullYear();
var edad = anyoActual - cumpleanyos.getFullYear();
document.write(`Tienes ${edad} años`);
