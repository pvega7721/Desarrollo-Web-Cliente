window.addEventListener("DOMContentLoaded", () => {
  datos = traerDatos();
  mostrarTabla();
});

function traerDatos() {
  const peticion = new XMLHttpRequest();
  peticion.open("GET", "./students.json");

  peticion.addEventListener("readystatechange", () => {
    if (peticion.readyState !== 4) {
      return;
    }
    if (peticion.status >= 200 && peticion.status < 300) {
      datos = JSON.parse(peticion.responseText);
      traerDatos();
    }
  });
  peticion.send();
}

function mostrarTabla() {
  var tBody = document.getElementsByTagName("tbody")[0];
  datos.students.forEach((dato) => {
    tBody.appendChild(pintarFila(dato));
  });
}

function pintarFila(x) {
  let tr = document.createElement("tr");

  let tdId = document.createElement("td");
  tdId.innerHTML = `${x.id}`;
  tr.appendChild(tdId);

  let tdName = document.createElement("td");
  tdName.innerHTML = `${x.nombre}`;
  tr.appendChild(tdName);

  let tdGrades = document.createElement("td");
  tdGrades.innerHTML = `${x.notas}`;
  tr.appendChild(tdGrades);

  array = x.notas;
  let sum = 0;
  array.forEach((nota) => {
    sum += nota;
  });
  media = sum / array.length;

  let tdAverage = document.createElement("td");
  tdAverage.innerHTML = `${media}`;
  tr.appendChild(tdAverage);
  return tr;
}
