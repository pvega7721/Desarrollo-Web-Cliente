do {
  var palabra = prompt("Introduce una palabra");
} while (!isNaN(palabra));

var palabraMinuscula = palabra.toLowerCase();
array = palabraMinuscula.split("");

var contador = 0;
array.forEach((element) => {
  if (
    element === "a" ||
    element === "e" ||
    element === "i" ||
    element === "o" ||
    element === "u"
  ) {
    contador++;
  }
});

document.write(`La palabra "${palabra}" tiene ${contador} vocales`);
