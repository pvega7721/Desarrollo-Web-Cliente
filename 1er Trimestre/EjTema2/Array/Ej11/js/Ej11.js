var producto1 = {
  nombre: "Gorra",
  cantidad: 5,
  precio: 15,
};
var producto2 = {
  nombre: "Camiseta",
  cantidad: 8,
  precio: 20,
};
var producto3 = {
  nombre: "Pantalón",
  cantidad: 20,
  precio: 30,
};
var producto4 = {
  nombre: "Zapatos",
  cantidad: 50,
  precio: 100,
};
var productos = new Array(producto1, producto2, producto3, producto4);

var nombrePrecio = productos.map(
  (producto) =>
    `Nombre: ${producto.nombre}, Precio total: ${(
      producto.cantidad * producto.precio
    ).toFixed(2)}€`
);

console.log(nombrePrecio);
