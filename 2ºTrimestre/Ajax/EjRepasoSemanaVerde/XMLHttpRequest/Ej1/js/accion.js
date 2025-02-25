var boton = document.getElementById("boton");
inicio = () => {
var divDatos = document.getElementById("divDatos");
var peticion = new XMLHttpRequest();

peticion.open("GET", "https://www.themealdb.com/api/json/v1/1/random.php");

peticion.send();

peticion.addEventListener("readystatechange", () => {
    if(peticion.readyState !==4) {
        return;
    }
    if(peticion.status >=200 && peticion.status < 300){
      console.log("éxito");
        
        var receta = JSON.parse(peticion.responseText);

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
        
    }else{
        window.alert("Error");
    }
})
};
boton.addEventListener("click", inicio);