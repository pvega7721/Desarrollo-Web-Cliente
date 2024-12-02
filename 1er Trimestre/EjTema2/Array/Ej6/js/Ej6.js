var semana = new Array(
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo"
);
var diaMasLargo = semana[1];
semana.forEach((element) => {
  console.log(`El día ${element} tiene ${element.length} letras`);
  if (element.length > diaMasLargo.length) {
    diaMasLargo = element;
  }
});
console.log(`El día más largo es el ${diaMasLargo}`);
