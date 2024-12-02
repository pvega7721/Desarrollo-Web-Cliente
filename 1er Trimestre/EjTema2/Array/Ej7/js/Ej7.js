do {
  var palabra = prompt("Introduce una palabra");
} while (!isNaN(palabra) || palabra == "");

var array = palabra.split("");
console.log(`Palabra introducida: ${palabra}`);
console.log(`Palabra introducida: ${array.reverse().join("")}`);
