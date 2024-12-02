var p = document.getElementsByTagName("p")[0];
var nuevoP = document.createElement("p");
nuevoP.textContent = "reemplazado";
document.body.replaceChild(nuevoP, p);
