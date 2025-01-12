window.addEventListener("DOMContentLoaded", () => {
    var boton = document.getElementById("boton");
    boton.addEventListener("click", (e) =>{
        e.preventDefault();
        mostrarDatos();
    })
});
var divPrincipal = null;

async function mostrarDatos(){
    try{
        var response = await fetch("https://rickandmortyapi.com/api/character/");
        var datos = await response.json();
        var personajes = datos.results;
        console.log(personajes);
        
    
        personajes.forEach((personaje, i)=> {
            //Crea una fila nueva cada 3 personajes
            if(i % 3 === 0){
                divPrincipal = document.createElement("div");
                divPrincipal.className = "character-row";
                document.body.appendChild(divPrincipal);
            }

            var divPersonaje = document.createElement("div");
            divPersonaje.className = "character-container";

            var divInfo = document.createElement("div");
            divInfo.className = "character-info";
            
            let imagen = document.createElement("img");
            imagen.src = personaje.image;
            imagen.className = "character-image";

            let id = document.createElement("p");
            id.innerHTML = `Id: ${personaje.id}`;

            let nombre = document.createElement("p");  
            nombre.innerHTML = `Nombre: ${personaje.name}`;

            let estado = document.createElement("p");
            estado.innerHTML = `Estado: ${personaje.status}`

            let especie = document.createElement("p");
            especie.innerHTML = `Especie: ${personaje.species}`

            divInfo.appendChild(id);
            divInfo.appendChild(nombre);
            divInfo.appendChild(estado);
            divInfo.appendChild(especie);

            divPersonaje.appendChild(imagen);
            divPersonaje.appendChild(divInfo);
            
            divPrincipal.appendChild(divPersonaje);
        });
        
        

    }catch(error){
        console.log("Error al obtener personajes.");
    }
}