var crearFormulario = function () {
  /*Formulario + atributos */
  var formulario = document.createElement("form");
  document.body.appendChild(formulario);
  formulario.setAttribute("method", "get");
  formulario.setAttribute("action", "https://google.com");
  formulario.style.width = "300px";

  /*Input nombre*/
  var nombre = document.createElement("input");
  nombre.setAttribute("type", "text");
  nombre.setAttribute("placeholder", "Nombres");
  nombre.style.width = "100%";
  nombre.style.margin = "10px 0px";
  nombre.style.padding = "5px";
  //document.body.formulario.appendChild(nombre); Hay que aplicarlo sólo a la variable formulario
  formulario.appendChild(nombre);

  /*Input apellido*/
  var apellido = document.createElement("input");
  apellido.setAttribute("type", "text");
  apellido.setAttribute("placeholder", "Apellidos");
  apellido.style.width = "100%";
  apellido.style.margin = "10px 0px";
  apellido.style.padding = "5px";
  formulario.appendChild(apellido);

  /*Input email */
  var email = document.createElement("input");
  email.setAttribute("type", "email");
  email.setAttribute("placeholder", "Email");
  email.style.width = "100%";
  email.style.margin = "10px 0px";
  email.style.padding = "5px";
  formulario.appendChild(email);

  /*Input asunto */
  var asunto = document.createElement("input");
  asunto.setAttribute("type", "text");
  asunto.setAttribute("placeholder", "Asunto");
  asunto.style.width = "100%";
  asunto.style.margin = "10px 0px";
  asunto.style.padding = "5px";
  formulario.appendChild(asunto);

  /*Input mensaje */
  var mensaje = document.createElement("input");
  mensaje.setAttribute("type", "text");
  mensaje.setAttribute("placeholder", "Mensaje");
  mensaje.style.width = "100%";
  mensaje.style.height = "200px";
  mensaje.style.margin = "10px 0px";
  mensaje.style.padding = "5px";
  formulario.appendChild(mensaje);

  /*Input enviar */
  var enviar = document.createElement("input");
  enviar.setAttribute("type", "submit");
  enviar.setAttribute("value", "Enviar");
  enviar.style.width = "100px";
  enviar.style.margin = "10px 0px";
  enviar.style.padding = "10px";
  enviar.style.backgroundColor = "#F05133";
  enviar.style.color = "#fff";
  enviar.style.border = "solid 1px #000";
  formulario.appendChild(enviar);

  formulario.addEventListener("submit", function () {
    alert("Has enviado el formulario");
  });
};

inicio = () => {
  document.getElementById("ContentFormulario").addEventListener("click", crearFormulario);
};
window.addEventListener("DOMContentLoaded", inicio);
