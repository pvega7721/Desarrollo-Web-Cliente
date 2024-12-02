window.addEventListener("DOMContentLoaded", (e) => {
  var array = [];
  var objeto1 = {
    id: 1,
    nombre: "nombre1",
    precio: 20,
    codigo: 1234,
  };
  var objeto2 = {
    id: 2,
    nombre: "nombre2",
    precio: 59,
    codigo: 2345,
  };
  var objeto3 = {
    id: 3,
    nombre: "nombre3",
    precio: 9,
    codigo: 3456,
  };
  var objeto4 = {
    id: 4,
    nombre: "nombre4",
    precio: 24,
    codigo: 4567,
  };
  array.push(objeto1, objeto2, objeto3, objeto4);

  var tbody = document.getElementById("cuerpoTabla");
  array.forEach((objeto) => {
    //Por cada objeto, se crea una fila y se le asigna su id.
    var fila = document.createElement("tr");
    fila.setAttribute("id", objeto.id);

    //luego se crea un td para cada atributo y se le asigna su valor
    var nombre = document.createElement("td");
    nombre.innerHTML = objeto.nombre;
    var precio = document.createElement("td");
    precio.innerHTML = objeto.precio;
    var codigo = document.createElement("td");
    codigo.innerHTML = objeto.codigo;

    //Insertamos cada una de las celdas a la fila
    fila.appendChild(nombre);
    fila.appendChild(precio);
    fila.appendChild(codigo);
    //imprimimos cada fila
    tbody.appendChild(fila);
  });
});
