var div = document.getElementById("div1");
var nuevoP = document.createElement("p");
var nuevoP2 = document.createElement("p");
nuevoP.textContent = "Soy el nuevo";
nuevoP.id = "p3";
nuevoP2.textContent = "Soy el primero ahora";
div.insertBefore(nuevoP2, div.firstChild); //Inserta un nuevo elemento antes del primero
div.appendChild(nuevoP);
