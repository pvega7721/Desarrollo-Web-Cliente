var sueldo = Number(prompt("¿Cuál es el sueldo del operario?"));
var antiguedad = prompt("¿Cuántos años de antiguedad tiene?");
if (sueldo < 500 && antiguedad >= 10) {
  document.write(`Salario a pagar: ${sueldo * 1.2}`);
} else if (sueldo < 500 && antiguedad < 10) {
  document.write(`Salario a pagar: ${sueldo * 1.05}`);
} else if (sueldo >= 500) {
  document.write(`Salario a pagar: ${sueldo}`);
}
