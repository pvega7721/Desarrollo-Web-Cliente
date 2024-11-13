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
//Creamos una nueva columna y la añadimos junto al resto
var columnaNueva = document.getElementsByTagName("tr")[0];
var columnax = document.createElement("th");
columnax.innerHTML = "Checkbox";
columnaNueva.appendChild(columnax);
var i = 0; //variable para incrementar el id de los checkbox
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
  //creo un nuevo td para el checkbox
  var chbox = document.createElement("td");
  chbox.innerHTML = "<input type='checkbox'>";
  //checkbox contiene el objeto del checkbox
  var checkbox = chbox.getElementsByTagName("input")[0];
  i++;
  checkbox.setAttribute("id", "checkbox " + i); //añadirá "checkbox1, checkbox2..."
  checkbox.setAttribute("value", "marcar");
  //Insertamos cada una de las celdas a la fila
  fila.appendChild(nombre);
  fila.appendChild(precio);
  fila.appendChild(codigo);
  //Inserto el nuevo checkbox
  fila.appendChild(chbox);
  //imprimimos cada fila
  tbody.appendChild(fila);
});
