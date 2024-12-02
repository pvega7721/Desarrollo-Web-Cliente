var producto1 = {
  nombre: "Camiseta",
  precio: 20,
  categoria: "Ropa",
};
var producto2 = {
  nombre: "iPhone",
  precio: 1000,
  categoria: "Moviles",
};
var producto3 = {
  nombre: "Portatil",
  precio: 900,
  categoria: "Portatiles",
};
var producto4 = {
  nombre: "Botella",
  precio: 10,
  categoria: "Accesorios",
};
var producto5 = {
  nombre: "Mesa",
  precio: 200,
  categoria: "Muebles",
};

var productos = new Array(
  producto1,
  producto2,
  producto3,
  producto4,
  producto5
);

var soloNombres = productos.map((producto) => producto.nombre.toUpperCase());
document.write(`<p> ${soloNombres.join("-")}</p>`);
console.log(soloNombres);
