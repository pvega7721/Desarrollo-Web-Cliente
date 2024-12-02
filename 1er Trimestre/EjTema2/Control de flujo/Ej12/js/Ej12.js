var palabra = prompt("Introduce una frase");
var array = palabra.split("");
var alreves = "";
for (i = array.length - 1; i >= 0; i--) {
  alreves += array[i];
}
document.write(alreves);
