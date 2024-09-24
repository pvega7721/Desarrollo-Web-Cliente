//1
let x = "Hola Mundo";
console.log(x.indexOf("Mundo"));
//2
let y = x.replace("Mundo", "Universo");
console.log(y);
//3
console.log(x.toUpperCase());
//4
console.log(x.toLowerCase());
//5
var nombre = "Pablo";
var apellido = "Vega";
console.log(nombre + " " + apellido);
//6
var palabra = "Cliente";
var pal1 = palabra.indexOf("e");
console.log(palabra.substring(0, pal1));
//7
var pal2 = palabra.substring(pal1, palabra.length);
console.log(pal2);
