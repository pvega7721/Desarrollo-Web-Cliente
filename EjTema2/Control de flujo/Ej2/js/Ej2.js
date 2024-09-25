//1
do {
  var num = prompt("Introduce un número menor a 24");
  if (isNaN(num)) {
    alert("Debe ser un número");
  }
} while (num < 0 || num > 23);
//2.
if (num >= 6 && num <= 11) {
  document.write("Buenos días");
} else if (num >= 12 && num <= 20) {
  document.write("Buenas tardes");
} else {
  document.write("Buenas noches");
}
