var suma = 0;
var cadenaNumeros = "";
for (let i = 0; i < 10; i++) {
  let num = Math.floor(Math.random() * (21 - 0 + 1));
  suma += num;
  cadenaNumeros += num + ",";
}

document.write(`La suma ${cadenaNumeros} es ${suma}`);
