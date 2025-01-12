window.addEventListener("DOMContentLoaded", () => {
    var boton = document.getElementById("boton");
    boton.addEventListener("click", (e) =>{
        e.preventDefault();
        mostrarDatos();
    });
});

var titulo = document.createElement("h2");
var div = document.createElement("div");
async function mostrarDatos(){
    try{
        div.innerHTML = "";
        var response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        var datos = await response.json();
        var receta = datos.meals[0];
        console.log(datos.meals[0].idMeal);// id de la receta
        
        //añado título
        titulo.innerHTML = `${receta.strMeal}`;

        //Añado imagen y la inserto en el div
        var imagen = document.createElement("img");
        imagen.setAttribute("src", `${receta.strMealThumb}`)
        div.appendChild(imagen);

        //Añado lista ordenada de los ingredientes
        var lista = document.createElement("ol");
        for (let index = 1; index <= 20; index++) {
            var ingrediente = receta[`strIngredient${index}`];//recorro todos los ingredientes
            if(ingrediente && ingrediente.trim() != ""){
                let item = document.createElement("li");
                item.innerHTML = ingrediente;
                lista.appendChild(item);
            }
        }
        div.appendChild(lista);

        //Añado el enlace de la receta
        var enlace = document.createElement("a");
        enlace.href = receta.strSource;
        enlace.target = "_blank";
        enlace.innerHTML = "Ver receta completa";

        div.appendChild(enlace);


        document.body.appendChild(titulo);
        document.body.appendChild(div);
    }catch(error){
        div.innerHTML = "Error al obtener la receta.";
    }
}