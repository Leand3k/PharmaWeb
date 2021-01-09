var db = require("../server");

var Usuario = function Usuario(usuario) {
  this.Contraseña = usuario.Contraseña;
  this.Correo = usuario.Correo;
  this.Direccion = usuario.Direccion;
  this.FechaRegistro = new Date();
  this.IdTipoUsuario = usuario.IdTipoUsuario;
  this.IdUsuario = usuario.IdUsuario;
  this.Nombre = usuario.Nombre;
  this.NumeroTelefono = usuario.NumeroTelefono;
};

module.exports = Usuario;
