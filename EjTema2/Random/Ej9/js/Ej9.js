var num = Math.floor(Math.random() * (11 - 1)) + 1;
console.log(num);
var numUsuario = prompt("Intenta adivinar el número aleatorio entre 1 y 10");
if (numUsuario == num) {
  document.write("¡Felicidades, adivinaste el número!");
} else {
  document.write("Lo siento, no has adivinado el número");
}
