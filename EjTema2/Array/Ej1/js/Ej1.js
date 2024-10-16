const arr = [2, 3, 4, 5, 0];
var suma = 0;
arr.forEach((e) => {
  suma += e;
});
console.log(`1.${suma}`);
var media = suma / arr.length;
console.log(`2. ${media}`);

const newArr = arr.map((e) => e * 3);
console.log(`3. ${newArr}`);

arr.forEach((e, i) => {
  arr[i] = e * 3;
});
console.log(`4. ${arr}`);
