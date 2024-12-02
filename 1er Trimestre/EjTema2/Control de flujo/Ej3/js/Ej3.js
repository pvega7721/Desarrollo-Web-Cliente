var topping = prompt(
  "Introduce el tipo de topping \n 1.Helado sin topping (1.90€)\n 2.Oreo (+1.00€)\n 3.Kitkat (+1.50€)\n 4.Brownie (+0.75€)\n 5.Lacasitos (+0.95€)"
);
var precioBase = 1.9;
switch (topping) {
  case "1":
    document.write(`El precio final es: ${Number(precioBase)}€`);
    break;
  case "2":
    document.write(`El precio final es: ${Number(precioBase) + 1}€`);
    break;
  case "3":
    document.write(`El precio final es: ${Number(precioBase) + 1.5}€`);
    break;
  case "4":
    document.write(`El precio final es: ${Number(precioBase) + 0.75}€`);
    break;
  case "5":
    document.write(
      `El precio final es: ${(Number(precioBase) + 0.95).toFixed(2)}€`
    );
    break;
  default:
    document.write(
      `Lo siento, no tenemos ese topping, <br> El helado sin topping cuesta: ${Number(
        precioBase
      )}€`
    );
}
