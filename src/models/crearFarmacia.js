const db = require("../server");

var Farmacia = function Farmacia(farmacia) {
    this.NombreLocal = Farmacia.NombreLocal;
    this.Direccion = Farmacia.Direccion;
    this.Nombre = Farmacia.Nombre;
    this.Correo = Farmacia.Correo;
    this.Telefono = Farmacia.Telefono;

  };

  module.exports = Farmacia;