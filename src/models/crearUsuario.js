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

Usuario.findByEmail = (Correo, result) => {
  const request = sql.request();
  request.input("Correo", Correo);
  request.query("Select * from Usuario where Correo = @Correo", (err, res) => {
    if (err) {
      result(err, null);
    }
    result(null, res.recordset[0]);
  });
};

Usuario.getUserById = (id, result) => {
  const request = sql.request();
  request.input("idUsuario", id);
  request.query(
    "Select * from Usuario where idUsuario = @idUsuario",
    (err, res) => {
      if (err) {
        result(err, null);
      }
      result(null, res.recordset[0]);
    }
  );
};

module.exports = Usuario;
