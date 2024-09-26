do {
  var num = Number(prompt("Introduce un número entero positivo"));
  //Si el valor introducido no es un número entero, es menor o igual a 0 o no es un número, se volverá a solicitar un número válido
} while (!Number.isInteger(num) || num <= 0 || isNaN(num));

for (i = 1; i < num; i++) {
  for (j = i - 1; j <= i; j++) {
    document.write("*");
  }
}
