let ventana;

// Funciones para la ventana principal
function abrirVentana() {
  ventana = window.open(
    "segunda.html",
    "nuevaVentana",
    "width=300,height=400,left=400,top=400"
  );
  ventana.focus();
}

function moverVentana() {
  if (ventana && !ventana.closed) ventana.moveBy(200, 0);
}

function posicionarVentana() {
  if (ventana && !ventana.closed) ventana.moveTo(500, 200);
}

function aumentarVentana() {
  if (ventana && !ventana.closed) ventana.resizeBy(100, 100);
}

function cambiarTamaño() {
  if (ventana && !ventana.closed) ventana.resizeTo(100, 150);
}

// Funciones para la ventana secundaria
function cambiarSecundariaVerde() {
  document.body.style.backgroundColor = "green";
}

function cambiarPrincipalRoja() {
  if (window.opener) {
    window.opener.document.body.style.backgroundColor = "red";
  }
}

function cerrarSecundaria() {
  window.close();
}

function cerrarSecundariaYPrincipal() {
  if (window.opener) {
    window.opener.close();
  }
  window.close();
}

// Inicialización para la ventana principal
function iniciarPrincipal() {
  document
    .getElementById("abrirVentana")
    .addEventListener("click", abrirVentana);
  document
    .getElementById("moverVentana")
    .addEventListener("click", moverVentana);
  document
    .getElementById("posicionarVentana")
    .addEventListener("click", posicionarVentana);
  document
    .getElementById("aumentarVentana")
    .addEventListener("click", aumentarVentana);
  document
    .getElementById("cambiarTamaño")
    .addEventListener("click", cambiarTamaño);
}

// Inicialización para la ventana secundaria
function iniciarSecundaria() {
  document
    .getElementById("secundariaVerde")
    .addEventListener("click", cambiarSecundariaVerde);
  document
    .getElementById("principalRoja")
    .addEventListener("click", cambiarPrincipalRoja);
  document
    .getElementById("cerrarSecundaria")
    .addEventListener("click", cerrarSecundaria);
  document
    .getElementById("cerrarSecundariaYPrincipal")
    .addEventListener("click", cerrarSecundariaYPrincipal);
}

// Detectar en qué ventana estamos
if (document.title === "Principal") {
  window.addEventListener("DOMContentLoaded", iniciarPrincipal);
} else if (document.title === "Secundaria") {
  window.addEventListener("DOMContentLoaded", iniciarSecundaria);
}
