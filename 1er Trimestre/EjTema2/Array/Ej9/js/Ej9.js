var factura = {
  numero: 13,
  cliente: "José Antonio",
  divisa: "€",
  subtotal: 200,
  IVA: 21,
};

var calcularTotal = function (cantidad, iva) {
  var total = (cantidad += cantidad * (iva / 100));
  return total;
};
console.log(calcularTotal(factura.subtotal, factura.IVA));
console.log(
  `La factura ${factura.numero} tiene un importe de ${factura.subtotal}${factura.divisa}`
);
