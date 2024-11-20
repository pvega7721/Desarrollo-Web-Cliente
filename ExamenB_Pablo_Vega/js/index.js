producto1 = {
  id: 1,
  categoria: {
    tipo: "Ropa",
    marca: "Nike",
  },
  nombre: "Zapatillas deportivas",
  descripcion: "Zapatillas para hacer deporte",
  cantidad: 40,
};
producto2 = {
  id: 2,
  categoria: {
    tipo: "Electrónica",
    marca: "Samsung",
  },
  nombre: "Tablet",
  descripcion: "Samsung galaxy tab8",
  cantidad: 130,
};
producto3 = {
  id: 3,
  categoria: {
    tipo: "Electrónica",
    marca: "Apple",
  },
  nombre: "Apple Watch",
  descripcion: "Reloj inteligente",
  cantidad: 200,
};
producto4 = {
  id: 4,
  categoria: {
    tipo: "Ropa",
    marca: "Adidas",
  },
  nombre: "Sudadera",
  descripcion: "Sudadera sin capucha",
  cantidad: 140,
};
producto5 = {
  id: 5,
  categoria: {
    tipo: "Ropa",
    marca: "Pull&Bear",
  },
  nombre: "Camisa",
  descripcion: "Camisa",
  cantidad: 230,
};
producto6 = {
  id: 6,
  categoria: {
    tipo: "Ropa",
    marca: "Adidas",
  },
  nombre: "Sudadera",
  descripcion: "Sudadera sin capucha",
  cantidad: 70,
};
producto7 = {
  id: 7,
  categoria: {
    tipo: "Ropa",
    marca: "Adidas",
  },
  nombre: "Sudadera",
  descripcion: "Sudadera sin capucha",
  cantidad: 90,
};
producto8 = {
  id: 8,
  categoria: {
    tipo: "Ropa",
    marca: "Adidas",
  },
  nombre: "Sudadera",
  descripcion: "Sudadera sin capucha",
  cantidad: 20,
};
var productos = [
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
  producto7,
  producto8,
];
//array que guardará los valores a mostrar en la tabla
var productosTabla = [];
//datos solicitados
var id;
var nombre;
var descripcion;
var cantidad;
var valida;
var divTabla;
var mostrarTabla = function (e) {
  e.preventDefault;
  divTabla = document.getElementById("resultado");
  id = document.getElementById("searchId").value;
  nombre = document.getElementById("searchNombre").value;
  descripcion = document.getElementById("searchDescripcion").value;
  cantidad = document.getElementById("searchCantidad").value;
  //recorre la lista de productos y coprueba si cumplen los criterios de búsqueda o no.
  productos.forEach((producto) => {
    if (
      producto.id === id &&
      producto.nombre === nombre &&
      producto.descripcion === descripcion &&
      producto.cantidad >= cantidad
    ) {
      //Añade el producto válido a la nueva tabla
      productosTabla.push(producto);
      valida = true;
    } else if (
      producto.id === "" &&
      producto.nombre === "" &&
      producto.descripcion === "" &&
      producto.cantidad === ""
    ) {
      //Imprimir tabla con todos los productos
      valida = false;
    } else if (
      producto.id != id &&
      producto.nombre != nombre &&
      producto.descripcion != descripcion &&
      producto.cantidad < cantidad
    ) {
      //mostrar mensaje y la tabla vacía
      valida = false;
      document.getElementById("mensaje").innerHTML =
        '<p style="color: red;"><b>No existen productos con esos datos</b></p>';

      let table = document.createElement("table");
      let th = document.createElement("th");
      table.appendChild(th);
      let tbody = document.createElement("tbody");
      table.appendChild(tbody);
      for (let i = 0; i < 4; i++) {
        let tr = document.createElement("tr");
        th.appendChild(tr);
      }
    }
  });
  if (valida) {
    //imprimo tabla válida
  }
};

inicio = () => {
  document
    .getElementById("searchButton")
    .addEventListener("click", mostrarTabla);
};
window.addEventListener("DOMContentLoaded", inicio);
