var apikey = document.getElementById("apikey");
//apikey.value para acceder a la clave
var div = document.getElementById("mapa");

window.addEventListener("DOMContentLoaded", () => {
  var boton = document.getElementById("b1");
  boton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(apikey.value);
    cargarMapa();
  });
});

function cargarMapa() {
  fetch(
    `https://opendata.aemet.es/opendata/api/mapasygraficos/analisis?api_key=${apikey.value}`
  ).then((response) =>
    response.json().then((datos) => {
      //Vacío el div para que no se duplique al pulsar más veces
      div.innerHTML = "";
      var imagen = document.createElement("img");
      imagen.setAttribute("src", `${datos.datos}`);
      div.appendChild(imagen);
    })
  );
}
