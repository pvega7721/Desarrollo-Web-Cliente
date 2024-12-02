var incidencia1 = {
  id: 1,
  estado: "Abierta",
  asunto: "Error en el sistema de inicio de sesión",
  descripcion: "No se puede iniciar sesión con las credenciales correctas.",
  detalles: {
    prioridad: "Alta",
    usuario: "Pablo",
  },
};

var incidencia2 = {
  id: 2,
  estado: "Pendiente",
  asunto: "Actualización de software fallida",
  descripcion:
    "El sistema no se actualiza correctamente a la versión más reciente.",
  detalles: {
    prioridad: "Media",
    usuario: "Lucía",
  },
};

var incidencia3 = {
  id: 3,
  estado: "Cerrada",
  asunto: "Problema con impresoras",
  descripcion: "Las impresoras no se conectan a la red interna.",
  detalles: {
    prioridad: "Alta",
    usuario: "Juan",
  },
};

var incidencia4 = {
  id: 4,
  estado: "Abierta",
  asunto: "Pantalla azul en equipos nuevos",
  descripcion:
    "Los equipos recién adquiridos presentan pantalla azul al encender.",
  detalles: {
    prioridad: "Alta",
    usuario: "Sofía",
  },
};

var incidencia5 = {
  id: 5,
  estado: "Pendiente",
  asunto: "Retraso en el correo interno",
  descripcion: "Los correos tardan en llegar más de 15 minutos.",
  detalles: {
    prioridad: "Baja",
    usuario: "Carlos",
  },
};

var incidencia6 = {
  id: 6,
  estado: "Cerrada",
  asunto: "Fallo en el sistema de copias de seguridad",
  descripcion: "Las copias de seguridad no se realizan automáticamente.",
  detalles: {
    prioridad: "Media",
    usuario: "Ana",
  },
};

var incidencia7 = {
  id: 7,
  estado: "Abierta",
  asunto: "Problema de conectividad en red WiFi",
  descripcion: "Algunos usuarios no pueden conectarse a la red WiFi.",
  detalles: {
    prioridad: "Alta",
    usuario: "Miguel",
  },
};
var incidencia8 = {
  id: 8,
  estado: "Pendiente",
  asunto: "Error al generar reportes",
  descripcion:
    "El sistema lanza un error al intentar exportar reportes en formato PDF.",
  detalles: {
    prioridad: "Media",
    usuario: "Laura",
  },
};
//Todo esto fuera de la función
//Array con todas las incidencias
var incidencias = [
  incidencia1,
  incidencia2,
  incidencia3,
  incidencia4,
  incidencia5,
  incidencia6,
  incidencia7,
  incidencia8,
];
//Declaramos todas las variables para almacenar los datos introducidos en el formulario
var divTabla;
var id;
var asunto;
var descripcion;
var estado;
var table;
var thead;
var tbody;
var valido;

var filtrar = function (e) {
  e.preventDefault(); //Para que el formulario no se envíe automáticamente

  //A las variables creadas, les asignamos los datos del formulario
  divTabla = document.getElementById("resultado");
  id = document.getElementById("searchId");
  asunto = document.getElementById("searchAsunto");
  descripcion = document.getElementById("searchDescripcion");
  estado = document.getElementById("searchEstado");
  //Creamos la estructura de la tabla
  table = document.createElement("table");
  thead = document.createElement("thead");
  tbody = document.createElement("tbody");

  //Creación de las cabeceras de la tabla
  var thId = document.createElement("th"); //id
  thId.innerHTML = "ID";
  thId.style.fontWeight = "bold";
  //Añadimos cada uno de los campos a la cabecera
  thead.appendChild(thId);

  var thEstado = document.createElement("th"); //Estado
  thEstado.innerHTML = "Estado";
  thEstado.style.fontWeight = "bold";
  thead.appendChild(thEstado);

  var thAsunto = document.createElement("th"); //Asunto
  thAsunto.innerHTML = "Asunto";
  thAsunto.style.fontWeight = "bold";
  thead.appendChild(thAsunto);

  var thPrioridad = document.createElement("th"); //Prioridad
  thPrioridad.innerHTML = "Prioridad";
  thPrioridad.style.fontWeight = "bold";
  thead.appendChild(thPrioridad);

  var thAcciones = document.createElement("th"); //Acciones
  thAcciones.innerHTML = "Acciones";
  thAcciones.style.fontWeight = "bold";
  thead.appendChild(thAcciones);

  //Una vez creada la cabecera, la añadimos a la tabla
  table.appendChild(thead);

  valido = false;
  //Recorre las incidencias, las compara con los datos introducidos y si coinciden, lo añade a la tabla.
  incidencias.forEach((incidencia) => {
    if (id.value && id.value == incidencia.id) {
      //Si es válida, añade la fila devuelta por pintarFila con los datos al body
      tbody.appendChild(pintarFila(incidencia));
      valido = true;
    } else if (estado.value && estado.value === incidencia.estado) {
      //Si es válida, añade la fila devuelta por pintarFila con los datos al body
      tbody.appendChild(pintarFila(incidencia));
      valido = true;
    } else if (asunto.value && asunto.value === incidencia.asunto) {
      //Si es válida, añade la fila devuelta por pintarFila con los datos al body
      tbody.appendChild(pintarFila(incidencia));
      valido = true;
    } else if (
      descripcion.value &&
      descripcion.value === incidencia.descripcion
    ) {
      //Si es válida, añade la fila devuelta por pintarFila con los datos al body
      tbody.appendChild(pintarFila(incidencia));
      valido = true;
    } else if (
      id.value === "" &&
      //estado tiene por defecto valor Todas, nunca está vacío
      estado.value === "Todas" &&
      asunto.value === "" &&
      descripcion.value === ""
    ) {
      //Si todos los campos están vacíos, muestra todos los productos
      tbody.appendChild(pintarFila(incidencia));
      valido = true;
    }
  });
  //Si la búsqueda no es válida, muestra un mensaje y oculta la tabla
  if (!valido) {
    alert("No existen incidencias para mostrar");
    divTabla.style.display = none;
  }
  //si todo ha ido correctamente, añadimos la tabla al div
  table.appendChild(tbody);
  divTabla.append(table);

  //Crea una fila para un producto pasado por parámetro
  function pintarFila(incidencia) {
    //Crea la fila para la tabla
    var tr = document.createElement("tr");

    //Crea la celda para el id y la añade a la fila
    var tdId = document.createElement("td");
    tdId.innerHTML = incidencia.id;
    tr.appendChild(tdId);

    //Crea la celda para el estado y la añade a la fila
    var tdEstado = document.createElement("td");
    tdEstado.innerHTML = incidencia.estado;
    tr.appendChild(tdEstado);

    //Crea la celda para el asunto y la añade a la fila
    var tdAsunto = document.createElement("td");
    tdAsunto.innerHTML = incidencia.asunto;
    tr.appendChild(tdAsunto);

    //Crea la celda para la prioridad y la añade a la fila
    var tdPrioridad = document.createElement("td");
    tdPrioridad.innerHTML = incidencia.detalles.prioridad;
    tr.appendChild(tdPrioridad);

    //Celda con la imagen
    var tdAcciones = document.createElement("td");
    //Creo la imagen y sus atributos
    var img = document.createElement("img");
    img.src = "ver.jpg";
    img.alt = "Imagen ver";
    img.width = 20;
    img.title = "Detalle de la incidencia";

    //Evento para que al pulsar la imagen abra la ventana
    img.addEventListener("click", (e) => {
      e.preventDefault();
      var ventanaImagen = window.open(
        "about:blank",
        "_blank",
        "width=500,height=500"
      );
      //escribo en la ventana
      ventanaImagen.document.write(`
        <h1>Id de la incidencia: ${incidencia.id}</h1>
        <h2>Descripción de la incidencia: ${incidencia.descripcion}</h2>
        <p> Usuario creador: <b>${incidencia.detalles.usuario}</b></p>
        <button id= "boton">Cerrar incidencia</button>
        `);
      ventanaImagen.document.close();

      //Cambia el estado y se cierra pero no he podido hacerlo dinámico
      ventanaImagen.document
        .getElementById("boton")
        .addEventListener("click", () => {
          incidencia.estado = "Cerrada";
          console.log(incidencia.estado);
          ventanaImagen.close();
        });
    });

    //añado la imagen a la celda y la celda a la fila
    tdAcciones.appendChild(img);
    tr.appendChild(tdAcciones);

    // Al hacer hover se cambiará el color
    tr.addEventListener("mouseover", () => {
      tr.style.backgroundColor = "#ffffcc";
    });
    // Al quitar el ratón de encima volverá a estar blanco
    tr.addEventListener("mouseout", () => {
      tr.style.backgroundColor = "#FFFFFF";
    });

    return tr;
  }
};

inicio = () => {
  document.getElementById("searchButton").addEventListener("click", filtrar);
};
window.addEventListener("DOMContentLoaded", inicio);
