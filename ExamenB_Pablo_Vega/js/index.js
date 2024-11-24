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
  descripcion: "Sudadera con capucha",
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
    tipo: "Movil",
    marca: "Apple",
  },
  nombre: "iPhone14 pro",
  descripcion: "Smartphone alta gama",
  cantidad: 70,
};
producto7 = {
  id: 7,
  categoria: {
    tipo: "Movil",
    marca: "Xiaomi",
  },
  nombre: "Xiaomi Mi13",
  descripcion: "Smartphone gama media",
  cantidad: 90,
};
producto8 = {
  id: 8,
  categoria: {
    tipo: "Movil",
    marca: "Samsung",
  },
  nombre: "Samsung s24",
  descripcion: "Smartphone alta gama",
  cantidad: 20,
};
//array con todos los productos
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
  e.preventDefault; //Para que el formulario no se envíe automáticamente

  //Nos traemos los objetos y no los values, para poder acceder a todos sus atributos.
  divTabla = document.getElementById("resultado");
  id = document.getElementById("searchId");
  nombre = document.getElementById("searchNombre");
  descripcion = document.getElementById("searchDescripcion");
  cantidad = document.getElementById("searchCantidad");

  //Creación de la estructura de la tabla
  var table = document.createElement("table");
  var thead = document.createElement("thead");

  //Creación de las cabeceras de la tabla
  //id
  var thId = document.createElement("th");
  thId.innerHTML = "ID";
  thId.style.fontWeight = "bold";
  thead.appendChild(thId);

  //Tipo
  var thTipo = document.createElement("th");
  thTipo.innerHTML = "Tipo";
  thTipo.style.fontWeight = "bold";
  thead.appendChild(thTipo);

  //Nombre
  var thNombre = document.createElement("th");
  thNombre.innerHTML = "Nombre";
  thNombre.style.fontWeight = "bold";
  thead.appendChild(thNombre);

  //Cantidad
  var thCantidad = document.createElement("th");
  thCantidad.innerHTML = "Cantidad";
  thCantidad.style.fontWeight = "bold";
  thead.appendChild(thCantidad);

  table.appendChild(thead);
  var tbody = document.createElement("tbody");

  valida = true;
  //recorre la lista de productos y coprueba si cumplen los criterios de búsqueda o no.
  productos.forEach((producto) => {
    if (id.value && id.value == producto.id) {
      tbody.appendChild(pintarFila(producto));
    } else if (nombre.value && nombre.value == producto.nombre) {
      tbody.appendChild(pintarFila(producto));
    } else if (cantidad.value && cantidad.value == producto.cantidad) {
      tbody.appendChild(pintarFila(producto));
    } else if (descripcion.value && descripcion.value == producto.descripcion) {
      tbody.appendChild(pintarFila(producto));
      //Si todos los campos están vaciós, muetra toda la tabla
    } else if (
      id.value == "" &&
      nombre.value == "" &&
      descripcion.value == "" &&
      cantidad.value == ""
    ) {
      tbody.appendChild(pintarFila(producto));
    } else {
      valida = false;
    }
  });
  if (valida) {
    let mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = "No hay productos con esos requistos";
    mensaje.style.color = "red";
    mensaje.style.fontWeight = "bold";
  }

  table.appendChild(tbody);
  resultado.appendChild(table);

  function pintarFila(producto) {}
};

inicio = () => {
  document
    .getElementById("searchButton")
    .addEventListener("click", mostrarTabla);
};
window.addEventListener("DOMContentLoaded", inicio);
