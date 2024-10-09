do {
  num = prompt("Introduce un número positivo");
} while (isNaN(num) || num < 0);
function factorial(num) {
  var multifactorial = 1;
  for (let index = num; index > 0; index--) {
    multifactorial *= index;
  }
  return multifactorial;
}

document.write(factorial(5));
