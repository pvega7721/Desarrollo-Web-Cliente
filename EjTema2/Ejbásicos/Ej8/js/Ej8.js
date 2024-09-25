var precioArticulo = prompt("¿Cuanto cuesta el articulo?");
var cantidadProductos = prompt("¿Cuántos productos quieres?");
var total = precioArticulo * cantidadProductos;
total = total.toFixed(2);
console.log(`Total a pagar: ${total}€`);
