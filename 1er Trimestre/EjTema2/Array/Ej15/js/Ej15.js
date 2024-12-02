var estudiante1 = {
  nombre: "Pablo",
  notas: new Array(4, 6, 7, 5, 6),
};
var estudiante2 = {
  nombre: "Lucía",
  notas: new Array(6, 8, 7, 9, 6),
};
var estudiante3 = {
  nombre: "Martín",
  notas: new Array(4, 8, 7, 5, 10),
};
var estudiante4 = {
  nombre: "Andrés",
  notas: new Array(3, 6, 7, 3, 6),
};
var estudiante5 = {
  nombre: "Marta",
  notas: new Array(6, 6, 10, 9, 6),
};
var estudiantes = new Array(
  estudiante1,
  estudiante2,
  estudiante3,
  estudiante4,
  estudiante5
);
//1
var notaMedia = estudiantes.map((estudiante) => {
  var suma = 0;
  estudiante.notas.forEach((nota) => {
    suma += nota;
  });
  var media = suma / estudiante.notas.length;
  return { nombre: estudiante.nombre, media: media };
});

console.log("Nota media por estudiante");
console.log(notaMedia);

//2
var notaMas7 = notaMedia.filter((estudiante) => estudiante.media > 7);
//3
notaMas7.forEach((estudiante) => {
  console.log(estudiante.nombre);
});
