window.addEventListener("DOMContentLoaded", () => {
  var boton = document.getElementById("pelicula");
  boton.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarPeliculas();
  });
});

function mostrarPeliculas() {
  try {
    var idPelicula = document.getElementById("peliculaId").value; //El id de la película se guarda correctamente
    if (idPelicula === null || idPelicula === "") {
      alert("Debe introducir el ID de una película"); //1
    }
    if (idPelicula < 1 || idPelicula > 6) {
      alert("Debe introducir un número entre 1 y 6"); //2
    }

    var peticion = new XMLHttpRequest();

    peticion.open("GET", `https://lotrapi.co/api/v1/films/${idPelicula}`);

    peticion.send();
    peticion.addEventListener("readystatechange", () =>{ //Faltaba esto en el examen

      if (peticion.readyState !== 4) {
        console.log("adios");
        return;
      }
      if (peticion.status >= 200 && peticion.status < 300) {
        console.log("hola");
        console.log(idPelicula);
  
        var pelicula = JSON.parse(peticion.responseText);
  
        //3
        //div que contendrá los datos de las películas
        var infoPelicula = document.getElementById("informacionPelicula");
  
        //titulo
        var titulo = document.createElement("h1");
        titulo.innerHTML = `${pelicula.title}`;
  
        //fecha
        var fecha = document.createElement("h2");
        fecha.innerHTML = `${pelicula.release_date}`;
  
        //autor
        var autor = document.createElement("h2");
        autor.innerHTML = `${pelicula.director[0]}`; // REVISAR
  
        //Título de personajes
        var tPersonajes = document.createElement("h3");
        tPersonajes.innerHTML = "Número total de personajes";
  
        //Párrafo que llevará el texto
        var nPersonajes = document.createElement("p");
  
        //Número total de personajes
        var numPersonajes = pelicula.characters.length;
  
        //texto personajes
        if (numPersonajes > 5) {
          nPersonajes.innerHTML = "Hay más de 5 personajes";
        } else {
          nPersonajes.innerHTML = "Hay menos de 5 personajes";
        }
  
        nPersonajes.addEventListener("mouseover", () => { //estaba puesto hover
          alert(`Hay ${numPersonajes} personajes`);
        });
  
        //Título de la URL
        var urlPersonajes = document.createElement("h4");
        urlPersonajes.innerHTML = `URL de los personajes`;
  
        var arrayPersonajes = pelicula.characters;
        var listaPersonajes = document.createElement("ul");
  
        //crea el ítem, le añade la url del personaje y luego añade el item a la lista
        arrayPersonajes.forEach((personaje) => {
          var item = document.createElement("li");
          var link = document.createElement("a");
          link.href = personaje; //corregido
          link.innerHTML = personaje; //corregido
          item.appendChild(link); //corregido
          listaPersonajes.appendChild(item);
        });
  
        //Añado los datos al div
        infoPelicula.appendChild(titulo);
        infoPelicula.appendChild(fecha);
        infoPelicula.appendChild(autor);
        infoPelicula.appendChild(tPersonajes);
        infoPelicula.appendChild(nPersonajes);
        infoPelicula.appendChild(urlPersonajes);
        infoPelicula.appendChild(listaPersonajes);
      }
    })
  } catch (error) {
    console.log("la url no está bien escrita");
  }
}

async function mostrarPersonajes() {
  try {
    var divDetallePersonaje = document.getElementById("detallePersonaje");

    arrayPersonajes.forEach((personaje) => {
      personaje.addEventListener("click", async (e) => {
        e.preventDefault();
        const response = await fetch(personaje); //Personaje es la url
        var datosPersonaje = await response.json(); //JSON con los datos del personaje.

        //nombre
        var nombre = document.createElement("h2");
        nombre.innerHTML = datosPersonaje.name;

        //rasgos
        var altura = document.createElement("p");
        altura.innerHTML = `${datosPersonaje.height}<br>`;

        var colorPelo = document.createElement("p");
        colorPelo.innerHTML = `${datosPersonaje.hair_color}`;

        var colorOjos = document.createElement("p");
        colorOjos.innerHTML = `${datosPersonaje.eye_color}`;

        //Armas
        var tArmas = document.createElement("h3");
        tArmas.innerHTML = "Armas";

        var arrayArmas = datosPersonaje.weapons;
        var listaArmas = document.createElement("ul");

        arrayArmas.forEach((arma) => {
          var item = document.createElement("li");
          item.appendChild(arma);
          listaArmas.appendChild(item);
        });

        //Peliculas
        var tPeliculas = document.createElement("h4");
        tPeliculas.innerHTML = "Películas:";

        var arrayPeliculas = datosPersonaje.films;
        var listaPeliculas = document.createElement("ul");
        arrayPeliculas.forEach((pelicula) => {
          var item = document.createElement("li");
          var linkPelicula = document.createElement("a");
          linkPelicula.innerHTML = pelicula;
          item.appendChild(linkPelicula);
          listaPeliculas.appendChild(item);

          if (arrayPeliculas.length > 3) {
            pelicula.style.backgroundColor = "b15583";
          } else {
            pelicula.style.backgroundColor = "ea8222";
          }
        });

        divDetallePersonaje.appendChild(nombre);
        divDetallePersonaje.appendChild(altura);
        divDetallePersonaje.appendChild(colorPelo);
        divDetallePersonaje.appendChild(colorOjos);
        divDetallePersonaje.appendChild(tArmas);
        divDetallePersonaje.appendChild(listaArmas);
      });
    });
  } catch (error) {
    console.log("Ha ocurrido un error");
  }
}
