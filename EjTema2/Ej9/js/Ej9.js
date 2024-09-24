var num = prompt("Escribe un número");
var array = num.split("");
var cifras = 0;
for (var i = 0; i < array.length; i++) {
  cifras++;
}
document.write(`<div style="color: blue"><i>${cifras}</i></div>`);
