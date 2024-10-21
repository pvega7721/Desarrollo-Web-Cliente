var usuario1 = {
  nombre: "Jose",
  edad: 19,
};
var usuario2 = {
  nombre: "Jose",
  edad: 25,
};
var usuario3 = {
  nombre: "Jose",
  edad: 15,
};
var usuario4 = {
  nombre: "Jose",
  edad: 17,
};

var usuarios = new Array(usuario1, usuario2, usuario3, usuario4);

var mayoresEdad = usuarios.filter((usuario) => usuario.edad >= 18);

var nombresFiltrados = mayoresEdad.map(
  (usuario) => `${usuario.nombre}, ${usuario.edad} años`
);
