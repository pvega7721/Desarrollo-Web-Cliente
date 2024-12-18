var div = document.getElementById("posts-list");

window.addEventListener("DOMContentLoaded", () => {
  var boton = document.getElementById("boton");
  boton.addEventListener("click", (e) => {
    e.preventDefault();
    cargarExtras();
  });
  cargarPosts();
});

function cargarPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=5").then(
    (response) =>
      response.json().then((posts) => {
        posts.forEach((post) => {
          var divPost = document.createElement("div");
          divPost.innerHTML = `Titulo: ${post.title} <br> Cuerpo: ${post.body} <br><br>`;
          div.appendChild(divPost);
        });
      })
  );
}

var i = 2;
function cargarExtras() {
  fetch(`https://jsonplaceholder.typicode.com/posts?_page=${i}&_limit=5`).then(
    (response) =>
      response.json().then((posts) => {
        div.innerHTML = "";
        posts.forEach((post) => {
          var divPost = document.createElement("div");
          divPost.innerHTML = `Titulo: ${post.title} <br> Cuerpo: ${post.body} <br><br>`;
          div.appendChild(divPost);

          divPost.addEventListener("click", () => {
            cargarComentarios();
          });
        });
      })
  );
  i++;
}

//cargarComentarios
function cargarComentarios() {}
