var sueldo = prompt("Introduce el salario");
var antiguedad = prompt("Introduce la antiguedad");

sueldo = Number(sueldo);

if (sueldo < 500 && antiguedad >= 10) {
  sueldo += sueldo * 0.2;
  alert(`Salario final: ${sueldo}`);
} else if (sueldo < 500 && antiguedad < 10) {
  sueldo += sueldo * 0.05;
  alert(`Salario final: ${sueldo}`);
} else if (sueldo >= 500) {
  alert(`Salario final: ${sueldo}`);
}
