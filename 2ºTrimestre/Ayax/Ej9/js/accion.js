window.addEventListener("DOMContentLoaded", () => {
  var boton = document.getElementById("boton");
  boton.addEventListener("click", (e) => {
    e.preventDefault();
    cargarPosts();
  });
});

function cargarPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=5").then(
    (response) =>
      response.json().then((posts) => {
        var div = document.getElementById("posts-list");

        posts.forEach((post) => {
          div.innerHTML = `${post.title}`;
        });
      })
  );
}
