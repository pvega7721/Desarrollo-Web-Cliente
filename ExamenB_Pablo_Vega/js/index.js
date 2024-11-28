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
//Todo esto fuera de la función
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
//Declaramos vairables para almacenar los datos introducidos en el formulario
var id;
var nombre;
var descripcion;
var cantidad;
var valida;
var divTabla;

var mostrarTabla = function (e) {
  e.preventDefault(); //Para que el formulario no se envíe automáticamente

  //A las variables creadas, les asignamos los datos del formulario
  divTabla = document.getElementById("resultado");
  divTabla.innerHTML = ""; // Limpiar contenido previo del divTabla para que no aparezca una nueva cada vez que pulse el botón
  id = document.getElementById("searchId");
  nombre = document.getElementById("searchNombre");
  descripcion = document.getElementById("searchDescripcion");
  cantidad = document.getElementById("searchCantidad");

  //Creamos la estructura de la tabla
  var table = document.createElement("table");
  var thead = document.createElement("thead");

  //Columna extra
  var thVender = document.createElement("th");
  thVender.innerHTML = "Vender";
  thVender.style.fontWeight = "bold";
  //Añadimos cada uno de los campos a la cabecera
  thead.appendChild(thVender);

  //Creación de las cabeceras de la tabla
  var thId = document.createElement("th"); //id
  thId.innerHTML = "ID";
  thId.style.fontWeight = "bold";
  //Añadimos cada uno de los campos a la cabecera
  thead.appendChild(thId);

  var thTipo = document.createElement("th"); //Tipo
  thTipo.innerHTML = "Tipo";
  thTipo.style.fontWeight = "bold";
  //Añadimos cada uno de los campos a la cabecera
  thead.appendChild(thTipo);

  var thNombre = document.createElement("th"); //Nombre
  thNombre.innerHTML = "Nombre";
  thNombre.style.fontWeight = "bold";
  //Añadimos cada uno de los campos a la cabecera
  thead.appendChild(thNombre);

  var thCantidad = document.createElement("th"); //Cantidad
  thCantidad.innerHTML = "Cantidad";
  thCantidad.style.fontWeight = "bold";
  //Añadimos cada uno de los campos a la cabecera
  thead.appendChild(thCantidad);

  //Añadimos la cabecera a la tabla
  table.appendChild(thead);
  //Creamos el body de la tabla, donde irán los productos
  var tbody = document.createElement("tbody");

  valida = true;
  //recorre la lista de productos y coprueba si cumplen los criterios de búsqueda o no.
  productos.forEach((producto) => {
    if (parseInt(id.value) == producto.id) {
      //Si es válido, añade la fila devuelta por pintarFila con los datos al body
      tbody.appendChild(pintarFila(producto));
    } else if (nombre.value == producto.nombre) {
      //Si es válido, añade la fila devuelta por pintarFila con los datos al body
      tbody.appendChild(pintarFila(producto));
    } else if (parseInt(cantidad.value) == producto.cantidad) {
      //Si es válido, añade la fila devuelta por pintarFila con los datos al body
      tbody.appendChild(pintarFila(producto));
    } else if (descripcion.value == producto.descripcion) {
      //Si es válido, añade la fila devuelta por pintarFila con los datos al body
      tbody.appendChild(pintarFila(producto));
    } else if (
      //Si todos los campos están vaciós, muetra todos los productos
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
  //Si la búsqueda no es válida, muestra un mensaje y oculta la tabla
  if (!valida) {
    let mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = "No hay productos con esos requistos";
    mensaje.style.color = "red";
    mensaje.style.fontWeight = "bold";
    divTabla.style.display = "none";
  }
  //Si todo ha ido correctamente, añadimos la tabla al div
  table.appendChild(tbody);
  divTabla.appendChild(table);

  //Crea una fila para un producto pasado como parametro
  function pintarFila(producto) {
    //Crea la fila para la tabla
    let tr = document.createElement("tr");

    //Extra: Crea la celda para vender todo y la añade al la fila
    let tdVender = document.createElement("td");
    let enlace = document.createElement("a");
    enlace.id = "venderTodo";
    enlace.textContent = "Vender Todo";
    enlace.style.color = "green";

    enlace.addEventListener("click", (e) => {
      e.preventDefault;
      var ventana = window.open(
        "about:blank",
        "_blank",
        "width=600,height=600"
      );
      ventana.document.write(`
      <h2>${producto.id}</h2>
      <p><b>${producto.descripcion}</b></p>
      <p>${producto.categoria.marca}</p>
      <button id=boton>Vender<button>`);

      ventana.document.getElementById("boton").addEventListener("click", () => {
        producto.cantidad = 0;
        console.log(producto.cantidad);
      });
    });

    tdVender.appendChild(enlace);
    tr.appendChild(tdVender);

    //Crea la celda para el id del producto y la añade a la fila
    let tdId = document.createElement("td");
    tdId.innerHTML = producto.id;
    tr.appendChild(tdId);

    //Crea la celda para el tipo y la añade a la fila
    let tdTipo = document.createElement("td");
    tdTipo.innerHTML = producto.categoria.tipo;
    tr.appendChild(tdTipo);

    //Crea la celda para el nombre y la añade a la fila
    let tdNombre = document.createElement("td");
    tdNombre.innerHTML = producto.nombre;
    tr.appendChild(tdNombre);

    //Crea la celda para la cantidad y la añade a la fila
    let tdCantidad = document.createElement("td");
    tdCantidad.innerHTML = producto.cantidad;
    tr.appendChild(tdCantidad);

    //Al hacer hover se cambia el color de fondo de la celda
    tr.addEventListener("mouseover", () => {
      tr.style.backgroundColor = "#ddeeac";
    });
    //Al quitar el ratón de encima, vuelve al color original
    tr.addEventListener("mouseout", () => {
      tr.style.backgroundColor = "darkseagreen";
    });

    //Devuelve la fila completa para añadirla al tbody
    return tr;
  }
};

inicio = () => {
  document
    .getElementById("searchButton")
    .addEventListener("click", mostrarTabla);
};
window.addEventListener("DOMContentLoaded", inicio);
