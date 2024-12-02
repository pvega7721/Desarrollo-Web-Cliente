var producto1 = {
  nombre: "Camiseta",
  precio: 30,
  categoria: (categoria = {
    nombre: "ropa",
    descripcion: "Productos de moda",
  }),
};
var producto2 = {
  nombre: "Pantalones",
  precio: 25,
  categoria: {
    nombre: "ropa",
    descripcion: "Productos de moda",
  },
};
var producto3 = {
  nombre: "Teclado",
  precio: 80,
  categoria: {
    nombre: "Tecnología",
    descripcion: "Productos de tecnología",
  },
};
var producto4 = {
  nombre: "Pelota",
  precio: 15,
  categoria: {
    nombre: "Deportes",
    descripcion: "Productos de deporte",
  },
};
var producto5 = {
  nombre: "Monitor",
  precio: 120,
  categoria: {
    nombre: "Tecnología",
    descripcion: "Productos de tecnología",
  },
};
//1
var productos = new Array(
  producto1,
  producto2,
  producto3,
  producto4,
  producto5
);
//2
var nombresProductos = productos.filter(
  (producto) => producto.categoria.nombre === "ropa"
);
console.log(nombresProductos);

nombresProductos.forEach((producto) => {
  console.log(
    `Nombre: ${producto.nombre}, Precio: ${producto.precio}, Categoría: ${producto.categoria.nombre}, Descripción: ${producto.categoria.descripcion}.`
  );
});
