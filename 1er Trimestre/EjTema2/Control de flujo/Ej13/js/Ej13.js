var num1 = Number(prompt("Introduce el número 1"));
var num2 = Number(prompt("Introduce el número 2"));
var num3 = Number(prompt("Introduce el número 3"));

var avg = (num1 + num2 + num3) / 3;
console.log(avg);
if (avg >= 7) {
  document.write("Promocionado");
}
