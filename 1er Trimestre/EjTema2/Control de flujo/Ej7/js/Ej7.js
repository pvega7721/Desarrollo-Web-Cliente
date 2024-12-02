do {
  var num = Number(prompt("Introduce un número"));
} while (isNaN(num));
var i = 1;
while (i <= 50) {
  if (num % 2 !== 0) {
    document.write(`${num} <br>`);
  }
}
