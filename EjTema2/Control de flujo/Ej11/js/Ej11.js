var nombre = prompt("Introduce tu nombre:");
var apellidos = prompt("Introduce tus apellidos:");
do {
  var salario = prompt("Introduce tu salario: ");
  salario = Number(salario).toFixed(2); //Pasa el salario a un número con dos decimales
} while (isNaN(salario));
do {
  var edad = Number(prompt("Intrdoduce tu edad: ")); //convierte el caracter introducido en número
} while (!Number.isInteger(edad) || isNaN(edad)); //Pregunta la edad hasta que introduzca un número entero

if (salario > 2000) {
  document.write(
    `Tu nombre es ${nombre}, tienes ${edad} años y ganas ${salario}€/mes`
  );
}
