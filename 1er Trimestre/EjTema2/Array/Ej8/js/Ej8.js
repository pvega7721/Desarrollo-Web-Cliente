var arrayPrueba = new Array(1, 3, 2, 5, 7, 4);

var parImpar = (array) => {
  var pares = array.filter((el) => el % 2 === 0 && !isNaN(el));
  var impares = array.filter((el) => el % 2 != 0 && !isNaN(el));
  console.log(pares);
  console.log(impares);
};

parImpar(arrayPrueba);
