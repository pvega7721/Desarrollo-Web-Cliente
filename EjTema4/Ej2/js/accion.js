var div = document.getElementById("div1");
var nuevoP = document.createElement("p");
nuevoP.textContent = "Soy el nuevo";
nuevoP.id = "p3";
div.appendChild(nuevoP);
console.log(nuevoP);
