inicio = () => {
  //No consigo acceder al document de la ventana principal
  var ventanaPrincipal = window.opener;
  function recorrerTabla() {}
  document.getElementById("volver").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("resultado")
  });
};
window.addEventListener("DOMContentLoaded", inicio);
