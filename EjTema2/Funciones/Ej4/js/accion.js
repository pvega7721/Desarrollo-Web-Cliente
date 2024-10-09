do {
  var num = prompt("Introduce un número positivo");
} while (isNaN(num) || num <= 0);

var sumatorio = (num) => {
  var numero = 1;
  for (let i = num; i > 0; i--) {
    numero += i;
  }

  document.write(`El sumatorio de ${num} es ${numero}`);
};

sumatorio(num);
