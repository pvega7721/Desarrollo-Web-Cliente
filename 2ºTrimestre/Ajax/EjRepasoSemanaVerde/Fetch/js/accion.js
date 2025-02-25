var boton = document.getElementById("boton");
inicio = () => {
    var divReceta = document.getElementById("divReceta");
    
    fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((response) => {
        response.json().then((receta) =>{
            document.getElementById("titulo").innerHTML= `<h2>${receta.meals[0].strMeal}</h2>`;
            divReceta.innerHTML = `<img src="${receta.meals[0].strMealThumb}" alt="Imagen de la receta">`
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
            divReceta.innerHTML += lista;
            
            divReceta.innerHTML += `<a href=${receta.meals[0].strSource}>Enlace de la receta</a>`;
        })
    })

}
boton.addEventListener("click", inicio);
