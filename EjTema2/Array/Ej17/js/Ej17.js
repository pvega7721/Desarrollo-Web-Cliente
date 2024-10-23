var crearObjeto = function () {
  var Taxi = {
    tipoMotor: "Diesel",
    numeroPasajeros: 5,
    carga: 600,
    velocidad: 200,
    ruedas: 4,
    saludar: function () {
      return alert(
        `Hola, soy un taxi de ${this.ruedas} ruedas y ${this.numeroPasajeros} pasajeros`
      );
    },
  };
  Taxi.saludar();
};
