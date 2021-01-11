const db = require("../server");

var UsuarioCliente = function UsuarioCliente(usuarioCliente) {
    this.Apellido = usuarioCliente.Apellido;
    this.Cedula = usuarioCliente.Cedula;
    this.FechaNacimiento = usuarioCliente.FechaNacimiento;
    this.IdUsuario = usuarioCliente.IdUsuario;
    this.IdUsuarioCliente = usuarioCliente.IdUsuarioCliente;
};

module.exports = UsuarioCliente;