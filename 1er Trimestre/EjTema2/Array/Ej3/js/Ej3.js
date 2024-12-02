var persona1 = {
  nombre: "Marcos",
  edad: "22",
  ciudad: "Cádiz",
};
var persona2 = {
  nombre: "Alberto",
  edad: "24",
  ciudad: "Sevilla",
};
var persona3 = {
  nombre: "Raúl",
  edad: "15",
  ciudad: "Madrid",
};
var persona4 = {
  nombre: "Jose",
  edad: "17",
  ciudad: "Barcelona",
};
var persona5 = {
  nombre: "Pablo",
  edad: "19",
  ciudad: "Sevilla",
};

var personas = new Array(persona1, persona2, persona3, persona4, persona5);

function mayorEdad() {
  document.write("Personas mayores de edad: ");
  personas.forEach((persona) => {
    if (persona.edad <= 18) {
      document.write(
        `<li> Nombre: ${persona.nombre}, edad: ${persona.edad}, ciudad: ${persona.ciudad}  </li>`
      );
    }
  });
}
function viveEnSevilla() {
  document.write("Personas que viven en Sevilla: ");
  personas.forEach((persona) => {
    if (persona.ciudad === "Sevilla") {
      document.write(
        `<li> Nombre: ${persona.nombre}, edad: ${persona.edad}, ciudad: ${persona.ciudad}  </li>`
      );
    }
  });
}
mayorEdad(personas);
viveEnSevilla(personas);
