var num1 = prompt("Introduce el primer número");
var num2 = prompt("Introduce el segundo número");
var suma = Number(num1) + Number(num2); //Para que no se concatenen mejor pasarlos a Number
var resta = num1 - num2;
console.log(`La suma de ${num1} y ${num2} es ${suma}`);
console.log(`La resta de ${num1} y ${num2} es ${resta}`);
