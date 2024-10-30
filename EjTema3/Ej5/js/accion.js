//Crea una lista con todos los botones, accediendo a ellos a través del class
var botones = document.getElementsByClassName("boton");
//Recorre la lista creada y a cada botón le asigna la función mostrarValor al pulsarlo
for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", function () {
    mostrarValor(this); //Pasa el botón pulsado a la función
  });
}
/*
No se puede usar forEach para recorrer un HTMLCollertion, que es lo que devuelve getElementByClassName()
botones.forEach((e) => {
  e.addEventListener("click", function () {
    mostrarValor(this); //Pasa el botón pulsado a la función
  });
});
*/
function mostrarValor(boton) {
  document.getElementById("valor").innerHTML = boton.value;
}
