var intervalo1 = setInterval(mostrarMensaje, 2000);
function mostrarMensaje() {
  console.log("En un lugar de la Mancha");
}
//funciona

function parar() {
  clearInterval(intervalo1);
}
//funciona

function boton3sec() {
  setTimeout(function () {
    console.log("Han pasado 3 segundos");
  }, 3000);
  /*Al especificar que le pasas una función, el temporizador hará lo que 
  devuelva esa función, sino enviará directamente lo que haya dentro*/
}
//funciona

var ventana1;
function abrirVentana() {
  ventana1 = window.open("../hora.html", "Hora", "height=300, width=300");
  var contador = 0;
  //Inserta todo en un intervalo que lo ejecuta cada segundo
  var intervalo = setInterval(function () {
    var horaActual = new Date().toLocaleTimeString();
    //Inserta el html en la ventana externa para darle luego valor al id
    ventana1.document.body.innerHTML += "<p id='horaActual'></p>";
    //Le asigna un valor al id (la hora actual sacada de la variable date)
    ventana1.document.getElementById("horaActual").innerHTML = horaActual;
    contador++;
    if (contador > 5) {
      clearInterval(intervalo); //Cuando pasen 5 segundos, para el temporizador
    }
  }, 1000);
  if (!ventana1.closed) {
    var cerarVentana = setTimeout(function () {
      ventana1.close();
    }, 10000);
  }
}
//Funciona
