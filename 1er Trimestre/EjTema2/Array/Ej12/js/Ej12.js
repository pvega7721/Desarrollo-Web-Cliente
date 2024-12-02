var salarios = {
  John: 100,
  Ann: 160,
  Peter: 130,
};
var total = 0;
for (let a in salarios) {
  if (salarios[a] == undefined) {
    total = 0;
  } else {
    total += salarios[a];
  }
}
console.log(`Total: ${total}`);
