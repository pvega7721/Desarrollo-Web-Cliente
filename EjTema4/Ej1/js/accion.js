var div = document.getElementById("myDIV");
//Array con todos los p dentro del div
var p = div.getElementsByTagName("p");
var primerP = p[0];
var segundoP = p[1];
//recorre todos los p del array y le cambia el color a la letra
for (let i = 0; i < p.length; i++) {
  const element = p[i];
  element.style.color = "red";
}
primerP.style.backgroundColor = "yellow";
segundoP.style.backgroundColor = "orange";
