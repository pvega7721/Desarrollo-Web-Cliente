var usuario1 = {
  nombre: "Pablo",
  edad: 19,
};
var usuario2 = {
  nombre: "Martín",
  edad: 25,
};
var usuario3 = {
  nombre: "Álvaro",
  edad: 15,
};
var usuario4 = {
  nombre: "Carlos",
  edad: 17,
};

var usuarios = new Array(usuario1, usuario2, usuario3, usuario4);

var mayoresEdad = usuarios.filter((usuario) => usuario.edad >= 18);

var nombresFiltrados = mayoresEdad.map(
  (usuario) => `${usuario.nombre} (${usuario.edad} años)`
);
console.log(nombresFiltrados);
