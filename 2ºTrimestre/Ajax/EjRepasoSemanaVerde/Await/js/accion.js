var boton = document.getElementById("boton");
inicio = () =>{
    var titulo = document.getElementById("titulo");
    var divDatos = document.getElementById("divDatos");
    async function mostrarDatos(){
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        var receta = await response.json();

        document.getElementById("titulo").innerHTML= `<h2>${receta.meals[0].strMeal}</h2>`;
        divDatos.innerHTML = `<img src="${receta.meals[0].strMealThumb}" alt="Imagen de la receta">`
        var ingredietes = [];
        for (let index = 1; index <= 20; index++) {
            if(receta.meals[0][`strIngredient${index}`] && receta.meals[0][`strIngredient${index}`] !== ""){
                ingredietes.push(receta.meals[0][`strIngredient${index}`]);
            }
        }
        var lista = "<ul>";
        ingredietes.forEach(element => {
                lista += `<li> ${element} </li>`;
            });
        lista += `</ul>`;
        divDatos.innerHTML += lista;
        
        divDatos.innerHTML += `<a href=${receta.meals[0].strSource}>Enlace de la receta</a>`;
    }
    mostrarDatos();
}
boton.addEventListener("click", inicio);