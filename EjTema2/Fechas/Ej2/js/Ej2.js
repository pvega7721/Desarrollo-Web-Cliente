var hoy = new Date();
var finalCurso = new Date(hoy.getFullYear() + 1, 5, 30);
var diferencia = finalCurso - hoy;
document.write(`Quedan ${Math.floor(diferencia / 1000 / 60 / 60 / 24)} días`);
