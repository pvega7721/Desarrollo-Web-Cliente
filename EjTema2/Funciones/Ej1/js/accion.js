function cuadradoTrad(num) {
  let cuadrado = num ** 2;
  document.write(cuadrado);
}
var cuadrado = function (num) {
  let cuadrado = num ** 2;
  document.write(cuadrado);
};
var cuadradoFlecha = (num) => {
  let cuadrado = num ** 2;
  document.write(cuadrado);
};

cuadradoTrad(2);
cuadrado(2);
cuadradoFlecha(2);
