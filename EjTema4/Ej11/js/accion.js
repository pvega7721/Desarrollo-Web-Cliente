var estaciones = new Array("Primavera", "Verano", "Otoño", "Invierno"); //Creo array

var titulo = document.createElement("h2"); //Creo el h2 con su texto y lo añado al documento
titulo.textContent = "Estaciones del año";
document.body.appendChild(titulo);

var lista = document.createElement("ul"); //creo la lista y la añado al documento
document.body.appendChild(lista);

for (let i in estaciones) {
  //creo los items de la lista y los añado recorriendo las estaciones
  var estacion = document.createElement("li");
  estacion.textContent = estaciones[i];
  lista.appendChild(estacion);
}

var continentes = new Array("Europa", "América", "Asia", "África", "Oceanía");

var titulo2 = document.createElement("h2");
titulo2.textContent = "Continentes";
document.body.appendChild(titulo2);

var listaCont = document.createElement("ul");
document.body.appendChild(listaCont);

for (let i in continentes) {
  var continente = document.createElement("li");
  continente.textContent = continentes[i];
  listaCont.appendChild(continente);
}
