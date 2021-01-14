const { request } = require("express");
const connection = require("../server");
const db = require("../server");

var Usuario = function (uidusuario, ucorreo, ucontraseña, unombre, udireccion, unumerotelefono, ufecharegistro,
uapellido, ucedula, ufechanacimiento) {
  this.IdUsuario = uidusuario;
  this.Correo = ucorreo;
  this.Contraseña = ucontraseña;
  this.Nombre = unombre;
  this.Direccion = udireccion;
  this.NumeroTelefono = unumerotelefono;
  this.FechaRegistro = ufecharegistro;
  this.Apellido = uapellido;
  this.Cedula = ucedula;
  this.FechaNacimiento = ufechanacimiento;
};

// Usuario.GetUserById = (id, result) => {
//   const sql = `SELECT * FROM Usuario WHERE IdUsuario = ${id}`
//   db.query(sql, (err, res) => {
//     if(err) {
//       console.log(err);
//       result(err, null);
//     }
//     else if (res.length){
//       console.log("Usuario encontrado: ", res[0]);
//       result(null, res[0]);
//     }
//     else{
//       result({ kind: "not_found" }, null);
//     }
//   });
// }

Usuario.Crear = (newUser, result) => {

  // newUser.Correo = `a`;
  // newUser.Contraseña = `0`;
  // newUser.Nombre = `0`;
  // newUser.Direccion = `a`;
  // newUser.NumeroTelefono = `0`;
  // newUser.Apellido = `lopez`;
  // newUser.Cedula = `0`;
  // newUser.FechaRegistro = Date.now();

  const sp = `call AgregarUsuario("${newUser.Correo}", "${newUser.Contraseña}", "${newUser.Nombre}", "${newUser.Direccion}", "${newUser.NumeroTelefono}", "${newUser.Apellido}", "${newUser.Cedula}", "${newUser.FechaNacimiento}");`;
  connection.query(sp, true, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("Usuario creado exitosamente");
  });
}

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
