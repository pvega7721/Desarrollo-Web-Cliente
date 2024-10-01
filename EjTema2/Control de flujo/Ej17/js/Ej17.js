do {
  var num = prompt("Introduce un número del 1 al 10");
} while (num < 1 || num > 10 || isNaN(num));

for (i = 1; i < 11; i++) {
  document.write(`${num} X ${i} = ${num * i} <br>`);
}
