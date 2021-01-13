const { request } = require("express");
const connection = require("../server");
const db = require("../server");

var Usuario = function (
  ucorreo,
  ucontraseña,
  udireccion,
  ufecharegistro,
  uidusuario,
  unombre,
  unumerotelefono,
  uapellido,
  ucedula,
  ufechanacimiento
) {
  this.Correo = ucorreo;
  this.Contraseña = ucontraseña;
  this.Direccion = udireccion;
  this.FechaRegistro = ufecharegistro;
  this.IdUsuario = uidusuario;
  this.Nombre = unombre;
  this.NumeroTelefono = unumerotelefono;
  this.Apellido = uapellido;
  this.Cedula = ucedula;
  this.FechaNacimiento = ufechanacimiento;
};

Usuario.Crear = (newUser, result) => {
  // newUser.Correo = `a`;
  // newUser.Contraseña = `0`;
  // newUser.Nombre = `0`;
  // newUser.Direccion = `a`;
  // newUser.NumeroTelefono = `0`;
  // newUser.Apellido = `lopez`;
  // newUser.Cedula = `0`;
  newUser.FechaNacimiento = Date.now();

  const sp = `call AgregarUsuario("${newUser.Correo}", "${newUser.Contraseña}", "${newUser.Nombre}", "${newUser.Direccion}", "${newUser.NumeroTelefono}", "${newUser.Apellido}", "${newUser.Cedula}", "${newUser.FechaNacimiento}");`;
  connection.query(sp, true, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("Usuario creado exitosamente");
  });
};

Usuario.getAllUsuario = (result) => {
  const sql = `SELECT * FROM Usuario;`;

  db.query(sql, (err, res) => {
    if (err) {
      console.log("Hay un error.", err);
      result(null, err);
      return;
    } else {
      console.log("Usuarios encontrados: ");
      result(null, res);
    }
  });
};

module.exports = Usuario;

//test
