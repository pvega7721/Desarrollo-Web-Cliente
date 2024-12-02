var palabra1 = prompt("Introduce la palabra1");
var palabra2 = prompt("Introduce la palabra2");
var palabra3 = prompt("Introduce la palabra3");

const arr = new Array(palabra1, palabra2, palabra3);

console.log(arr);

arr.forEach((e) => {
  if (e == null) {
    arr.push("");
  }
});
console.log(arr);
//-----------------------------------------------------------
const filtrado = arr.filter((e) => e.toLowerCase().startsWith("c"));
if (filtrado.length > 0) {
  console.log(`Array original: ${arr} <br>`);
  console.log(`Palabras que empiezan por C: ${filtrado}<br>`);
  document.write(`Array original: ${arr}`);
  document.write(`Palabras que empiezan por C: ${filtrado}`);
} else {
  console.log("No hay palabras que comiencen por c");
  document.write("No hay palabras que comiencen por c");
}
