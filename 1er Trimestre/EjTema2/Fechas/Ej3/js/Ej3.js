var dia = prompt("Introduce sólo el día de tu cumpleaños");
var mes = prompt("Introduce sólo el mes de tu cumpleaños");
var anyoActual = new Date().getFullYear();
var anyoFinal = new Date(2101, 0, 1);
var sumaAnyos = 0;
for (i = anyoActual; i <= anyoFinal.getFullYear(); i++) {
  let anyo = new Date(i, mes, dia);
  if (anyo.getDay() == 0) {
    sumaAnyos++;
  }
}
document.write(
  `Desde hoy hasta el año 2100, tu cumpleaños cae en domingo ${sumaAnyos} veces`
);
