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
    `Tu nombre es ${nombre} ${apellidos}, tienes ${edad} años y ganas ${salario}€/mes`
  );
} else if (salario >= 1000 && salario <= 2000 && edad > 45) {
  document.write(
    `Tu nombre es ${nombre} ${apellidos}, tienes ${edad} años y ganas ${
      salario * 1.03
    }€/mes`
  );
} else if (salario >= 1000 && salario <= 2000 && edad <= 45) {
  document.write(
    `Tu nombre es ${nombre} ${apellidos}, tienes ${edad} años y ganas ${Math.floor(
      salario * 1.1
    )}€/mes`
  );
} else if (salario < 1000 && edad < 30) {
  document.write(
    `Tu nombre es ${nombre} ${apellidos}, tienes ${edad} años y ganas 1100€/mes`
  );
} else if (salario < 1000 && edad >= 30 && edad < 45) {
  document.write(
    `Tu nombre es ${nombre} ${apellidos}, tienes ${edad} años y ganas ${
      salario * 1.03
    }€/mes`
  );
} else if (salario < 1000 && edad > 45) {
  document.write(
    `Tu nombre es ${nombre} ${apellidos}, tienes ${edad} años y ganas ${
      salario * 1.15
    }€/mes`
  );
}
