for (let i = 0; i < 500; i++) {
  var aleatorio = Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
  if (aleatorio % 2 == 0) {
    document.write(`${aleatorio} par <br>`);
  } else {
    document.write(`${aleatorio} impar <br>`);
  }
}
