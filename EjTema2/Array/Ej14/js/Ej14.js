var libro1 = {
  titulo: "Titulo1",
  nPaginas: 300,
};
var libro2 = {
  titulo: "Titulo2",
  nPaginas: 200,
};
var libro3 = {
  titulo: "Titulo3",
  nPaginas: 400,
};
var libro4 = {
  titulo: "Titulo4",
  nPaginas: 600,
};
var libro5 = {
  titulo: "Titulo5",
  nPaginas: 240,
};

var libros = new Array(libro1, libro2, libro3, libro4, libro5);

var mas300 = libros.filter((libro) => libro.nPaginas >= 300);
mas300.forEach((element) => {
  console.log(element.titulo);
});
